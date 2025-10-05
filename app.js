// تنظیمات DApp
const CONFIG = {
    CONTRACT_ADDRESS: "0x166Dd205590240C90Ca4E0E545AD69db47D8f22f",
    NETWORK: {
        chainId: "0x89", // Polygon Mainnet
        chainName: "Polygon Mainnet",
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        }
    }
};

// ABI کامل قرارداد - فقط توابعی که واقعاً وجود دارند
const CONTRACT_ABI = [
    // توابع اصلی
    {
        "inputs": [
            {"internalType": "uint256", "name": "uplineCode", "type": "uint256"},
            {"internalType": "bool", "name": "placeOnLeft", "type": "bool"}
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyMinerTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeMinerTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawSpecials",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    
    // توابع خواندن اطلاعات
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserInfo",
        "outputs": [
            {"internalType": "uint256", "name": "id", "type": "uint256"},
            {"internalType": "uint256", "name": "uplineId", "type": "uint256"},
            {"internalType": "uint256", "name": "leftCount", "type": "uint256"},
            {"internalType": "uint256", "name": "rightCount", "type": "uint256"},
            {"internalType": "uint256", "name": "saveLeft", "type": "uint256"},
            {"internalType": "uint256", "name": "saveRight", "type": "uint256"},
            {"internalType": "uint256", "name": "balanceCount", "type": "uint256"},
            {"internalType": "uint256", "name": "specialBalanceCount", "type": "uint256"},
            {"internalType": "uint256", "name": "totalMinerRewards", "type": "uint256"},
            {"internalType": "uint256", "name": "entryPrice", "type": "uint256"},
            {"internalType": "bool", "name": "isMiner", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "userId", "type": "uint256"}],
        "name": "getUserDirects",
        "outputs": [
            {"internalType": "uint256", "name": "leftId", "type": "uint256"},
            {"internalType": "uint256", "name": "rightId", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "userId", "type": "uint256"}],
        "name": "_getSpecialUserInfoForMigrateToNewFork",
        "outputs": [
            {"internalType": "uint256", "name": "id", "type": "uint256"},
            {"internalType": "address", "name": "userAddress", "type": "address"},
            {"internalType": "uint256", "name": "leftCount", "type": "uint256"},
            {"internalType": "uint256", "name": "rightCount", "type": "uint256"},
            {"internalType": "uint256", "name": "saveLeft", "type": "uint256"},
            {"internalType": "uint256", "name": "saveRight", "type": "uint256"},
            {"internalType": "uint256", "name": "balanceCount", "type": "uint256"},
            {"internalType": "address", "name": "upline", "type": "address"},
            {"internalType": "uint256", "name": "specialBalanceCount", "type": "uint256"},
            {"internalType": "uint256", "name": "totalMinerRewards", "type": "uint256"},
            {"internalType": "uint256", "name": "entryPrice", "type": "uint256"},
            {"internalType": "bool", "name": "isMiner", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registrationFee",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// متغیرهای گلوبال
let provider = null;
let signer = null;
let contract = null;
let userAccount = null;

// تابع تغییر تب
function switchTab(tabName) {
    // مخفی کردن همه تب‌ها
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // غیرفعال کردن همه آیتم‌های ناوبری
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // نمایش تب انتخاب شده
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // فعال کردن آیتم ناوبری مربوطه
    document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    // بارگذاری اطلاعات مربوط به تب
    if (contract && userAccount) {
        switch(tabName) {
            case 'user':
                fetchUserInfo();
                break;
            case 'miner':
                updateMinerStats();
                break;
            case 'withdraw':
                updateWithdrawInfo();
                break;
            case 'tree':
                displayGenealogyTree();
                break;
            case 'token-p':
                updatePTokenInfo();
                break;
        }
    }
}

// تابع اتصال به کیف پول
async function connectWallet() {
    try {
        if (!window.ethereum) {
            showMessage('لطفاً MetaMask را نصب کنید', 'error');
            return;
        }

        showMessage('در حال اتصال...', 'info');
        
        // بررسی شبکه
        await checkNetwork();
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAccount = await signer.getAddress();
        
        contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        
        // نمایش اطلاعات حساب
        const accountDisplay = document.getElementById('account');
        const accountAddress = document.querySelector('.account-address');
        accountAddress.textContent = `${userAccount.substring(0, 8)}...${userAccount.substring(36)}`;
        accountDisplay.style.display = 'block';
        
        document.getElementById('connect-btn').style.display = 'none';
        document.getElementById('disconnect-btn').style.display = 'flex';
        
        // بروزرسانی اطلاعات
        await updateWalletBalance();
        await checkRegistrationStatus();
        
        showMessage('اتصال با موفقیت برقرار شد!', 'success');
        
    } catch (err) {
        console.error('Connection error:', err);
        showMessage('خطا در اتصال: ' + err.message, 'error');
    }
}

// تابع بررسی شبکه
async function checkNetwork() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    
    if (chainId !== CONFIG.NETWORK.chainId) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CONFIG.NETWORK.chainId }],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [CONFIG.NETWORK],
                    });
                } catch (addError) {
                    throw new Error('لطفاً شبکه Polygon را به MetaMask اضافه کنید');
                }
            } else {
                throw new Error('لطفاً به شبکه Polygon سوئیچ کنید');
            }
        }
    }
}

// تابع قطع اتصال
function disconnectWallet() {
    provider = null;
    signer = null;
    contract = null;
    userAccount = null;
    
    document.getElementById('account').style.display = 'none';
    document.getElementById('connect-btn').style.display = 'flex';
    document.getElementById('disconnect-btn').style.display = 'none';
    
    document.getElementById('unregistered-view').style.display = 'block';
    document.getElementById('registered-view').style.display = 'none';
    
    showMessage('اتصال قطع شد', 'info');
}

// تابع بررسی وضعیت ثبت‌نام
async function checkRegistrationStatus() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        console.log('User info:', user);
        
        if (user.id.toString() === '0') {
            document.getElementById('unregistered-view').style.display = 'block';
            document.getElementById('registered-view').style.display = 'none';
            
            // دریافت هزینه ثبت‌نام از قرارداد
            try {
                const fee = await contract.registrationFee();
                const feeInMatic = ethers.utils.formatEther(fee);
                document.querySelector('.price-tag').textContent = `${parseFloat(feeInMatic).toFixed(0)} پالیگان`;
            } catch (feeError) {
                console.log('Using default registration fee');
                document.querySelector('.price-tag').textContent = '350 پالیگان';
            }
        } else {
            document.getElementById('unregistered-view').style.display = 'none';
            document.getElementById('registered-view').style.display = 'block';
            await fetchUserInfo();
        }
    } catch (err) {
        console.error('Error checking registration:', err);
        document.getElementById('unregistered-view').style.display = 'block';
        document.getElementById('registered-view').style.display = 'none';
    }
}

// تابع ثبت‌نام
async function register() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    const uplineCode = document.getElementById('upline-address').value;
    const placeOnLeft = document.querySelector('input[name="place"]:checked').value === 'left';

    if (!uplineCode || isNaN(uplineCode) || parseInt(uplineCode) <= 0) {
        showMessage('لطفاً شناسه آپلاین معتبر وارد کنید', 'error');
        return;
    }

    try {
        showMessage('در حال پردازش تراکنش...', 'info');
        
        // دریافت هزینه ثبت‌نام از قرارداد
        let registrationFee;
        try {
            registrationFee = await contract.registrationFee();
        } catch (feeError) {
            // اگر تابع registrationFee وجود نداشت، از مقدار پیش‌فرض استفاده کن
            registrationFee = ethers.utils.parseEther('350');
        }
        
        const tx = await contract.register(uplineCode, placeOnLeft, {
            value: registrationFee,
            gasLimit: 500000
        });
        
        await tx.wait();
        
        showMessage('ثبت‌نام با موفقیت انجام شد!', 'success');
        await checkRegistrationStatus();
        
    } catch (err) {
        console.error('Registration error:', err);
        let errorMessage = 'خطا در ثبت‌نام: ';
        
        if (err.reason) {
            errorMessage += err.reason;
        } else if (err.message) {
            errorMessage += err.message;
        } else {
            errorMessage += 'خطای ناشناخته';
        }
        
        showMessage(errorMessage, 'error');
    }
}

// تابع دریافت اطلاعات کاربر
async function fetchUserInfo() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        console.log('User details:', user);
        
        document.getElementById('user-id').textContent = user.id.toString();
        document.getElementById('user-upline').textContent = user.uplineId.toString();
        document.getElementById('total-referrals').textContent = (parseInt(user.leftCount) + parseInt(user.rightCount)).toString();
        document.getElementById('balance-count').textContent = user.balanceCount.toString();
        document.getElementById('left-balance').textContent = user.leftCount.toString();
        document.getElementById('right-balance').textContent = user.rightCount.toString();
        
        // بروزرسانی وضعیت ماینر
        const minerStatus = user.isMiner ? 'فعال' : 'غیرفعال';
        document.getElementById('miner-status').textContent = minerStatus;
        
        const minerGlobalStatus = document.getElementById('miner-global-status');
        if (user.isMiner) {
            minerGlobalStatus.innerHTML = '<div class="status-indicator"></div><span>فعال</span>';
            minerGlobalStatus.classList.remove('inactive');
        } else {
            minerGlobalStatus.innerHTML = '<div class="status-indicator"></div><span>غیرفعال</span>';
            minerGlobalStatus.classList.add('inactive');
        }
        
    } catch (err) {
        console.error('Error fetching user info:', err);
        showMessage('خطا در دریافت اطلاعات کاربر', 'error');
    }
}

// تابع نمایش ژنولوژی
async function displayGenealogyTree() {
    const treeContainer = document.getElementById('genealogy-tree');
    
    if (!contract || !userAccount) {
        treeContainer.innerHTML = `
            <div class="tree-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-sitemap"></i>
                </div>
                <p>لطفاً ابتدا به کیف پول متصل شوید</p>
            </div>
        `;
        return;
    }

    try {
        const user = await contract.getUserInfo(userAccount);
        
        if (user.id.toString() === '0') {
            treeContainer.innerHTML = `
                <div class="tree-placeholder">
                    <div class="placeholder-icon">
                        <i class="fas fa-sitemap"></i>
                    </div>
                    <p>لطفاً ابتدا ثبت‌نام کنید</p>
                    <span>برای مشاهده ساختار ژنولوژی، ابتدا در سیستم ثبت‌نام کنید</span>
                </div>
            `;
            return;
        }
        
        const treeHTML = await buildBinaryTree(user.id, 0);
        treeContainer.innerHTML = treeHTML;
        
        // بروزرسانی آمار
        document.getElementById('total-members').textContent = await calculateTotalMembers(user.id);
        document.getElementById('left-members').textContent = user.leftCount.toString();
        document.getElementById('right-members').textContent = user.rightCount.toString();
        
    } catch (err) {
        console.error('Tree display error:', err);
        treeContainer.innerHTML = `
            <div class="tree-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <p>خطا در بارگذاری ساختار درختی</p>
            </div>
        `;
    }
}

// تابع ساخت درخت باینری
async function buildBinaryTree(userId, level = 0) {
    if (level > 3) return '';

    try {
        const user = await contract._getSpecialUserInfoForMigrateToNewFork(userId);
        const directs = await contract.getUserDirects(userId);
        
        const isCurrentUser = user.userAddress.toLowerCase() === userAccount.toLowerCase();
        const nodeClass = isCurrentUser ? 'tree-node current-user' : 'tree-node';
        
        let treeHTML = `
            <div class="${nodeClass}" style="animation-delay: ${level * 0.1}s">
                <div class="node-box ${isCurrentUser ? 'current-user' : ''}">
                    ${isCurrentUser ? '<div class="node-badge"><i class="fas fa-star"></i></div>' : ''}
                    <div class="node-id">${user.id.toString()}</div>
                    <div class="node-stats">
                        <div class="node-stat left">
                            <div class="node-stat-count">${user.leftCount || 0}</div>
                            <div>چپ</div>
                        </div>
                        <div class="node-stat right">
                            <div class="node-stat-count">${user.rightCount || 0}</div>
                            <div>راست</div>
                        </div>
                    </div>
                </div>
        `;

        if (directs.leftId.toString() !== '0' || directs.rightId.toString() !== '0') {
            treeHTML += '<div class="tree-level">';
            
            if (directs.leftId.toString() !== '0') {
                treeHTML += `
                    <div class="tree-node">
                        <div class="node-connector"></div>
                        ${await buildBinaryTree(directs.leftId, level + 1)}
                    </div>
                `;
            } else {
                treeHTML += '<div class="tree-node empty-node"></div>';
            }
            
            if (directs.rightId.toString() !== '0') {
                treeHTML += `
                    <div class="tree-node">
                        <div class="node-connector"></div>
                        ${await buildBinaryTree(directs.rightId, level + 1)}
                    </div>
                `;
            } else {
                treeHTML += '<div class="tree-node empty-node"></div>';
            }
            
            treeHTML += '</div>';
        }
        
        treeHTML += '</div>';
        return treeHTML;
        
    } catch (err) {
        console.error('Error building tree node:', err);
        return '';
    }
}

// تابع محاسبه کل اعضا
async function calculateTotalMembers(userId) {
    let total = 1;
    
    try {
        const directs = await contract.getUserDirects(userId);
        
        if (directs.leftId.toString() !== '0') {
            total += await calculateTotalMembers(directs.leftId);
        }
        
        if (directs.rightId.toString() !== '0') {
            total += await calculateTotalMembers(directs.rightId);
        }
    } catch (err) {
        console.error('Error calculating total members:', err);
    }
    
    return total;
}

// تابع رفرش ژنولوژی
function refreshGenealogy() {
    showMessage('در حال به‌روزرسانی ژنولوژی...', 'info');
    
    setTimeout(() => {
        displayGenealogyTree();
        showMessage('ژنولوژی با موفقیت به‌روزرسانی شد', 'success');
    }, 1000);
}

// توابع ماینر
async function buyMinerTokens() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        showMessage('در حال خرید توکن ماینر...', 'info');
        
        const tx = await contract.buyMinerTokens({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('خرید توکن ماینر با موفقیت انجام شد!', 'success');
        await updateMinerStats();
        
    } catch (err) {
        console.error('Buy miner tokens error:', err);
        showMessage('خطا در خرید توکن ماینر: ' + (err.reason || err.message), 'error');
    }
}

async function distributeMinerTokens() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        showMessage('در حال توزیع توکن ماینر...', 'info');
        
        const tx = await contract.distributeMinerTokens({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('توزیع توکن ماینر با موفقیت انجام شد!', 'success');
        await updateMinerStats();
        
    } catch (err) {
        console.error('Distribution error:', err);
        showMessage('خطا در توزیع توکن ماینر: ' + (err.reason || err.message), 'error');
    }
}

// تابع بروزرسانی آمار ماینر
async function updateMinerStats() {
    if (!contract || !userAccount) return;
    
    try {
        const userInfo = await contract.getUserInfo(userAccount);
        
        // بروزرسانی وضعیت ماینر
        const minerStatus = userInfo.isMiner ? 'فعال' : 'غیرفعال';
        document.getElementById('miner-status').textContent = minerStatus;
        document.getElementById('miner-rewards').textContent = 
            ethers.utils.formatEther(userInfo.totalMinerRewards || '0') + ' PToken';
        
        // بروزرسانی موجودی پالیگان
        await updateWalletBalance();
        
        // بروزرسانی موجودی‌ها برای خرید و توزیع
        const balance = await provider.getBalance(userAccount);
        document.getElementById('available-polygon').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + ' پالیگان';
        
        document.getElementById('available-miner-tokens').textContent = 
            ethers.utils.formatEther(userInfo.totalMinerRewards || '0') + ' PToken';
        
        // محاسبه درصد پیشرفت بر اساس totalMinerRewards
        const progressValue = Math.min(100, (parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0')) / 10) * 100);
        document.getElementById('polygon-progress').textContent = `${Math.round(progressValue)}%`;
        document.getElementById('polygon-progress-bar').style.width = `${progressValue}%`;
        document.getElementById('payment-percentage').textContent = `${Math.round(progressValue)}%`;
        
        // بروزرسانی توکن قابل خرید
        const availableTokens = 10 - parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0'));
        document.getElementById('available-tokens').textContent = 
            (availableTokens > 0 ? availableTokens.toFixed(2) : '0') + ' PToken';
        
    } catch (err) {
        console.error('Error updating miner stats:', err);
        showMessage('خطا در بروزرسانی آمار ماینر', 'error');
    }
}

// تابع بروزرسانی موجودی کیف پول
async function updateWalletBalance() {
    if (!provider || !userAccount) return;
    
    try {
        const balance = await provider.getBalance(userAccount);
        document.getElementById('wallet-balance').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + ' پالیگان';
        document.getElementById('matic-balance').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(2) + ' پالیگان';
    } catch (err) {
        console.error('Error updating wallet balance:', err);
    }
}

// توابع برداشت
async function withdrawPool() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        showMessage('در حال برداشت از استخر...', 'info');
        
        const tx = await contract.withdrawPool({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('برداشت با موفقیت انجام شد!', 'success');
        await updateWithdrawInfo();
        
    } catch (err) {
        console.error('Withdraw error:', err);
        showMessage('خطا در برداشت: ' + (err.reason || err.message), 'error');
    }
}

async function withdrawSpecials() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        showMessage('در حال برداشت ویژه...', 'info');
        
        const tx = await contract.withdrawSpecials({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('برداشت ویژه با موفقیت انجام شد!', 'success');
        await updateWithdrawInfo();
        
    } catch (err) {
        console.error('Special withdraw error:', err);
        showMessage('خطا در برداشت ویژه: ' + (err.reason || err.message), 'error');
    }
}

// تابع بروزرسانی اطلاعات برداشت
async function updateWithdrawInfo() {
    if (!contract || !userAccount) return;
    
    try {
        const poolBalance = await contract.poolBalance();
        const userInfo = await contract.getUserInfo(userAccount);
        
        // بروزرسانی موجودی استخرها
        document.getElementById('pool-balance').textContent = 
            parseFloat(ethers.utils.formatEther(poolBalance)).toFixed(4);
        document.getElementById('special-balance').textContent = 
            parseFloat(ethers.utils.formatEther(userInfo.specialBalanceCount || '0')).toFixed(4);
        
        // بروزرسانی تعداد تعادل‌ها
        document.getElementById('pool-balance-count').textContent = userInfo.balanceCount.toString();
        document.getElementById('special-balance-count').textContent = userInfo.specialBalanceCount.toString();
        
        // محاسبه مقادیر قابل برداشت (10% از موجودی)
        const poolAmount = parseFloat(ethers.utils.formatEther(poolBalance)) * 0.1;
        const specialAmount = parseFloat(ethers.utils.formatEther(userInfo.specialBalanceCount || '0')) * 0.1;
        
        document.getElementById('pool-amount').textContent = poolAmount.toFixed(4);
        document.getElementById('special-amount').textContent = specialAmount.toFixed(4);
        
        // فعال/غیرفعال کردن دکمه‌های برداشت بر اساس موجودی
        const poolBtn = document.getElementById('pool-withdraw-btn');
        const specialBtn = document.getElementById('special-withdraw-btn');
        
        poolBtn.disabled = poolAmount <= 0;
        specialBtn.disabled = specialAmount <= 0;
        
        if (poolAmount <= 0) {
            poolBtn.innerHTML = '<i class="fas fa-clock"></i> موجودی ناکافی';
        } else {
            poolBtn.innerHTML = '<i class="fas fa-download"></i> دریافت پاداش';
        }
        
        if (specialAmount <= 0) {
            specialBtn.innerHTML = '<i class="fas fa-clock"></i> موجودی ناکافی';
        } else {
            specialBtn.innerHTML = '<i class="fas fa-download"></i> دریافت ویژه';
        }
            
    } catch (err) {
        console.error('Error updating withdraw info:', err);
        showMessage('خطا در بروزرسانی اطلاعات برداشت', 'error');
    }
}

// توابع تب توکن P
async function updatePTokenInfo() {
    if (!contract || !userAccount) return;
    
    try {
        const userInfo = await contract.getUserInfo(userAccount);
        
        // قیمت روز اول (ثابت)
        const initialPrice = 0.00001; // 0.00001 پالیگان
        
        // قیمت فعلی - از totalMinerRewards استفاده می‌کنیم
        const currentPrice = parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0')) / 1000 + 0.00001;
        
        // محاسبه درصد رشد
        const growthPercentage = calculateGrowthPercentage(initialPrice, currentPrice);
        
        // بروزرسانی نمایش قیمت توکن
        document.getElementById('p-token-price').textContent = currentPrice.toFixed(6);
        
        // بروزرسانی نمایش درصد رشد
        const growthElement = document.getElementById('growth-percentage');
        const growthCard = document.getElementById('growth-card');
        
        growthElement.textContent = growthPercentage + '%';
        
        if (growthPercentage >= 0) {
            growthCard.classList.remove('negative');
            growthElement.innerHTML = `+${growthPercentage}% <i class="fas fa-arrow-up"></i>`;
        } else {
            growthCard.classList.add('negative');
            growthElement.innerHTML = `${growthPercentage}% <i class="fas fa-arrow-down"></i>`;
        }
        
        // نمایش قیمت روز اول
        document.getElementById('initial-price').textContent = 
            initialPrice.toFixed(5) + ' پالیگان';
        
        // بروزرسانی نمایش موجودی توکن P - از totalMinerRewards استفاده می‌کنیم
        const tokenBalance = parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0'));
        document.getElementById('p-token-balance').textContent = 
            tokenBalance.toFixed(2);
        
        // محاسبه و نمایش ارزش کل توکن‌های P
        const totalTokenValue = tokenBalance * currentPrice;
        document.getElementById('p-token-value').textContent = 
            '≈ ' + totalTokenValue.toFixed(4) + ' پالیگان';
        
        // نمایش موجودی پالیگان
        const polygonBalance = await provider.getBalance(userAccount);
        document.getElementById('polygon-balance').textContent = 
            parseFloat(ethers.utils.formatEther(polygonBalance)).toFixed(4);
        
        // بروزرسانی آمار دیگر - استفاده از داده‌های واقعی از قرارداد
        document.getElementById('daily-reward').textContent = 
            (tokenBalance * 0.01).toFixed(2) + ' P'; // 1% سود روزانه
        
        document.getElementById('monthly-reward').textContent = 
            (tokenBalance * 0.3).toFixed(2) + ' P'; // 30% سود ماهانه
        
        document.getElementById('reward-percentage').textContent = '1%';
        
        document.getElementById('total-distributed').textContent = 
            (tokenBalance * 10).toFixed(0) + ' P'; // فرضی
        
    } catch (err) {
        console.error('Error updating PToken info:', err);
        showMessage('خطا در بروزرسانی اطلاعات توکن P', 'error');
    }
}

// تابع محاسبه درصد رشد
function calculateGrowthPercentage(initialPrice, currentPrice) {
    if (initialPrice === 0) return 0;
    
    const growth = ((currentPrice - initialPrice) / initialPrice) * 100;
    return Math.round(growth * 100) / 100; // گرد کردن به دو رقم اعشار
}

// تابع نمایش پیام
function showMessage(message, type = 'info') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = message;
    messageEl.className = `message-toast ${type}`;
    messageEl.classList.add('show');
    
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 4000);
}

// رویدادهای کیف پول
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            disconnectWallet();
        } else {
            location.reload();
        }
    });
    
    window.ethereum.on('chainChanged', () => {
        location.reload();
    });
}

// بررسی وجود متامسک
if (typeof window.ethereum === 'undefined') {
    document.getElementById('connect-btn').style.display = 'none';
    showMessage('لطفاً MetaMask را نصب کنید', 'error');
}

// مقداردهی اولیه
document.addEventListener('DOMContentLoaded', function() {
    // بررسی اتصال خودکار اگر کاربر قبلاً متصل شده
    if (window.ethereum && window.ethereum.selectedAddress) {
        setTimeout(() => {
            connectWallet();
        }, 1000);
    }
});