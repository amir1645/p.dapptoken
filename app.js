// تنظیمات DApp
const CONFIG = {
    CONTRACT_ADDRESS: "0x166dd205590240c90ca4e0e545ad69db47d8f22f",
    TOKEN_P_CONTRACT_ADDRESS: "0x82F7dBe1792436d15bdA22bB3340bD3f45D614Fa",
    CREATOR_ADDRESS: "0xYourCreatorAddressHere"
};

// ABI قرارداد اصلی
const CONTRACT_ABI = [
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
        "name": "contributeToMinerPool",
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
        "name": "getMinerStats",
        "outputs": [
            {"internalType": "uint256", "name": "checkedOutPaidCount", "type": "uint256"},
            {"internalType": "uint256", "name": "eligibleInProgressCount", "type": "uint256"},
            {"internalType": "uint256", "name": "totalRemain", "type": "uint256"},
            {"internalType": "uint256", "name": "networkerCount", "type": "uint256"}
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
    }
];

// ABI قرارداد توکن P
const TOKEN_P_ABI = [
    {
        "inputs": [],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyPToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPTokenPriceInWei",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_BACKING",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "pTokenAmount", "type": "uint256"}
        ],
        "name": "sellPToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// متغیرهای گلوبال
let provider = null;
let signer = null;
let contract = null;
let tokenPContract = null;
let userAccount = null;
let countdownTime = 5 * 60 * 60 + 23 * 60 + 17;
let canWithdraw = false;

// تابع تغییر تب
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.getElementById(tabName + '-tab').classList.add('active');
    
    document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    if (contract && userAccount) {
        switch(tabName) {
            case 'user':
                fetchUserInfo();
                break;
            case 'token-p':
                updatePTokenInfo();
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
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAccount = await signer.getAddress();
        
        contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        tokenPContract = new ethers.Contract(CONFIG.TOKEN_P_CONTRACT_ADDRESS, TOKEN_P_ABI, signer);
        
        const accountDisplay = document.getElementById('account');
        const accountAddress = document.querySelector('.account-address');
        accountAddress.textContent = `${userAccount.substring(0, 8)}...${userAccount.substring(36)}`;
        accountDisplay.style.display = 'block';
        
        document.getElementById('connect-btn').style.display = 'none';
        document.getElementById('disconnect-btn').style.display = 'flex';
        
        await updateWalletBalance();
        await updatePTokenInfo();
        await checkRegistrationStatus();
        
        showMessage('اتصال با موفقیت برقرار شد!', 'success');
        
    } catch (err) {
        console.error('Connection error:', err);
        showMessage('خطا در اتصال: ' + err.message, 'error');
    }
}

// تابع قطع اتصال
function disconnectWallet() {
    provider = null;
    signer = null;
    contract = null;
    tokenPContract = null;
    userAccount = null;
    
    document.getElementById('account').style.display = 'none';
    document.getElementById('connect-btn').style.display = 'flex';
    document.getElementById('disconnect-btn').style.display = 'none';
    
    document.getElementById('unregistered-view').style.display = 'block';
    document.getElementById('registered-view').style.display = 'none';
    
    document.getElementById('p-token-price').textContent = '0';
    document.getElementById('p-token-balance').textContent = '0';
    document.getElementById('p-token-value').textContent = '≈ 0 پالیگان';
    document.getElementById('growth-percentage').textContent = '0%';
    document.getElementById('initial-price').textContent = '0 پالیگان';
    
    showMessage('اتصال قطع شد', 'info');
}

// تابع بررسی وضعیت ثبت‌نام
async function checkRegistrationStatus() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        
        if (user.id.toString() === '0') {
            document.getElementById('unregistered-view').style.display = 'block';
            document.getElementById('registered-view').style.display = 'none';
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

    if (!uplineCode || isNaN(uplineCode)) {
        showMessage('لطفاً شناسه آپلاین معتبر وارد کنید', 'error');
        return;
    }

    try {
        showMessage('در حال پردازش تراکنش...', 'info');
        
        const registrationFee = ethers.utils.parseEther('350');
        const tx = await contract.register(uplineCode, placeOnLeft, {
            value: registrationFee,
            gasLimit: 2000000
        });
        
        await tx.wait();
        
        showMessage('ثبت‌نام با موفقیت انجام شد!', 'success');
        await checkRegistrationStatus();
        
    } catch (err) {
        console.error('Registration error:', err);
        showMessage('خطا در ثبت‌نام: ' + (err.reason || err.message), 'error');
    }
}

// تابع دریافت اطلاعات کاربر
async function fetchUserInfo() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        
        document.getElementById('user-id').textContent = user.id.toString();
        document.getElementById('user-upline').textContent = user.uplineId.toString();
        document.getElementById('total-referrals').textContent = (user.leftCount.add(user.rightCount)).toString();
        document.getElementById('balance-count').textContent = user.balanceCount.toString();
        document.getElementById('left-balance').textContent = user.leftCount.toString();
        document.getElementById('right-balance').textContent = user.rightCount.toString();
        
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
    }
}

// تابع بروزرسانی اطلاعات توکن P
async function updatePTokenInfo() {
    if (!tokenPContract || !userAccount) return;

    try {
        const priceInWei = await tokenPContract.getPTokenPriceInWei();
        const priceInMatic = ethers.utils.formatEther(priceInWei);
        
        const tokenBalance = await tokenPContract.balanceOf(userAccount);
        const decimals = await tokenPContract.decimals();
        const formattedBalance = ethers.utils.formatUnits(tokenBalance, decimals);
        
        const tokenValue = parseFloat(formattedBalance) * parseFloat(priceInMatic);
        
        const initialPriceWei = await tokenPContract.INITIAL_BACKING();
        const initialPrice = ethers.utils.formatEther(initialPriceWei);
        
        const growthPercentage = ((parseFloat(priceInMatic) - parseFloat(initialPrice)) / parseFloat(initialPrice)) * 100;
        
        document.getElementById('p-token-price').textContent = parseFloat(priceInMatic).toFixed(8);
        document.getElementById('p-token-balance').textContent = parseFloat(formattedBalance).toFixed(4);
        document.getElementById('p-token-value').textContent = `≈ ${tokenValue.toFixed(6)} پالیگان`;
        document.getElementById('growth-percentage').textContent = `${growthPercentage.toFixed(2)}%`;
        document.getElementById('initial-price').textContent = `${parseFloat(initialPrice).toFixed(8)} پالیگان`;
        
        const growthCard = document.getElementById('growth-card');
        if (growthPercentage >= 0) {
            growthCard.classList.remove('negative');
        } else {
            growthCard.classList.add('negative');
        }
        
    } catch (err) {
        console.error('Error updating P token info:', err);
    }
}

// تابع خرید توکن P
async function buyPTokens() {
    if (!tokenPContract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        const balance = await provider.getBalance(userAccount);
        const balanceInMatic = parseFloat(ethers.utils.formatEther(balance));
        
        if (balanceInMatic < 0.001) {
            showMessage('موجودی پالیگان کافی نیست (حداقل 0.001 MATIC)', 'error');
            return;
        }

        const buyAmount = ethers.utils.parseEther('0.001');
        
        showMessage('در حال خرید توکن P...', 'info');
        
        const tx = await tokenPContract.buyPToken({
            value: buyAmount,
            gasLimit: 200000
        });
        
        await tx.wait();
        
        showMessage('خرید توکن P با موفقیت انجام شد!', 'success');
        
        await updatePTokenInfo();
        await updateWalletBalance();
        
    } catch (err) {
        console.error('Buy P token error:', err);
        showMessage('خطا در خرید توکن P: ' + (err.reason || err.message), 'error');
    }
}

// تابع فروش توکن P
async function sellPTokens() {
    if (!tokenPContract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        const tokenBalance = await tokenPContract.balanceOf(userAccount);
        
        if (tokenBalance.isZero()) {
            showMessage('موجودی توکن P کافی نیست', 'error');
            return;
        }

        showMessage('در حال فروش توکن P...', 'info');
        
        const tx = await tokenPContract.sellPToken(tokenBalance, {
            gasLimit: 200000
        });
        
        await tx.wait();
        
        showMessage('فروش توکن P با موفقیت انجام شد!', 'success');
        
        await updatePTokenInfo();
        await updateWalletBalance();
        
    } catch (err) {
        console.error('Sell P token error:', err);
        showMessage('خطا در فروش توکن P: ' + (err.reason || err.message), 'error');
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
        
        const treeHTML = await buildSimpleTree(user.id);
        treeContainer.innerHTML = treeHTML;
        
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

// تابع ساده برای ساخت درخت
async function buildSimpleTree(userId) {
    try {
        const user = await contract._getSpecialUserInfoForMigrateToNewFork(userId);
        const directs = await contract.getUserDirects(userId);
        
        const isCurrentUser = user.userAddress.toLowerCase() === userAccount.toLowerCase();
        
        let html = `
            <div class="tree-level level-0">
                <div class="tree-node">
                    <div class="node-box ${isCurrentUser ? 'current-user' : ''}">
                        <div class="node-id">${userId}</div>
                        <div class="node-stats">
                            <div class="node-stat left">
                                <div class="node-stat-count">${user.leftCount || 0}</div>
                            </div>
                            <div class="node-stat right">
                                <div class="node-stat-count">${user.rightCount || 0}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (directs.leftId.toString() !== '0' || directs.rightId.toString() !== '0') {
            html += '<div class="tree-level level-1">';
            
            if (directs.leftId.toString() !== '0') {
                const leftUser = await contract._getSpecialUserInfoForMigrateToNewFork(directs.leftId);
                html += `
                    <div class="tree-node">
                        <div class="node-connector"></div>
                        <div class="node-box">
                            <div class="node-id">${directs.leftId}</div>
                            <div class="node-stats">
                                <div class="node-stat left">
                                    <div class="node-stat-count">${leftUser.leftCount || 0}</div>
                                </div>
                                <div class="node-stat right">
                                    <div class="node-stat-count">${leftUser.rightCount || 0}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                html += '<div class="tree-node"><div class="empty-node"></div></div>';
            }
            
            if (directs.rightId.toString() !== '0') {
                const rightUser = await contract._getSpecialUserInfoForMigrateToNewFork(directs.rightId);
                html += `
                    <div class="tree-node">
                        <div class="node-connector"></div>
                        <div class="node-box">
                            <div class="node-id">${directs.rightId}</div>
                            <div class="node-stats">
                                <div class="node-stat left">
                                    <div class="node-stat-count">${rightUser.leftCount || 0}</div>
                                </div>
                                <div class="node-stat right">
                                    <div class="node-stat-count">${rightUser.rightCount || 0}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                html += '<div class="tree-node"><div class="empty-node"></div></div>';
            }
            
            html += '</div>';
        }
        
        return html;
        
    } catch (err) {
        console.error('Error building simple tree:', err);
        return `
            <div class="tree-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <p>خطا در ساخت درخت</p>
            </div>
        `;
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
        
        const tx = await contract.buyMinerTokens({ gasLimit: 200000 });
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
        
        const tx = await contract.distributeMinerTokens({ gasLimit: 200000 });
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
        const minerStats = await contract.getMinerStats();
        
        const minerStatus = userInfo.isMiner ? 'فعال' : 'غیرفعال';
        document.getElementById('miner-status').textContent = minerStatus;
        document.getElementById('miner-rewards').textContent = 
            ethers.utils.formatEther(userInfo.totalMinerRewards || '0') + ' PToken';
        
        await updateWalletBalance();
        
        const balance = await provider.getBalance(userAccount);
        document.getElementById('available-polygon').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + ' MATIC';
        
        document.getElementById('available-miner-tokens').textContent = 
            ethers.utils.formatEther(userInfo.totalMinerRewards || '0') + ' PToken';
        
        const progressValue = Math.min(100, (parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0')) / 10) * 100);
        document.getElementById('polygon-progress').textContent = `${Math.round(progressValue)}%`;
        document.getElementById('polygon-progress-bar').style.width = `${progressValue}%`;
        document.getElementById('payment-percentage').textContent = `${Math.round(progressValue)}%`;
        
        document.getElementById('available-tokens').textContent = 
            (10 - parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0'))).toFixed(2) + ' PToken';
        
    } catch (err) {
        console.error('Error updating miner stats:', err);
    }
}

// تابع بروزرسانی موجودی کیف پول
async function updateWalletBalance() {
    if (!provider || !userAccount) return;
    
    try {
        const balance = await provider.getBalance(userAccount);
        document.getElementById('wallet-balance').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + ' MATIC';
        document.getElementById('matic-balance').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(2) + ' MATIC';
        document.getElementById('polygon-balance').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4);
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

    if (!canWithdraw) {
        showMessage('هنوز زمان برداشت فرا نرسیده است', 'error');
        return;
    }

    try {
        showMessage('در حال برداشت از استخر...', 'info');
        
        const tx = await contract.withdrawPool({ gasLimit: 200000 });
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

    if (!canWithdraw) {
        showMessage('هنوز زمان برداشت فرا نرسیده است', 'error');
        return;
    }

    try {
        showMessage('در حال برداشت ویژه...', 'info');
        
        const tx = await contract.withdrawSpecials({ gasLimit: 200000 });
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
        
        document.getElementById('pool-balance').textContent = 
            parseFloat(ethers.utils.formatEther(poolBalance)).toFixed(4);
        document.getElementById('special-balance').textContent = 
            parseFloat(ethers.utils.formatEther(userInfo.specialBalanceCount || '0')).toFixed(4);
        
        document.getElementById('pool-balance-count').textContent = userInfo.balanceCount.toString();
        document.getElementById('special-balance-count').textContent = userInfo.specialBalanceCount.toString();
        
        const poolAmount = parseFloat(ethers.utils.formatEther(poolBalance)) * 0.1;
        const specialAmount = parseFloat(ethers.utils.formatEther(userInfo.specialBalanceCount || '0')) * 0.1;
        
        document.getElementById('pool-amount').textContent = poolAmount.toFixed(4);
        document.getElementById('special-amount').textContent = specialAmount.toFixed(4);
        
        const poolBtn = document.getElementById('pool-withdraw-btn');
        const specialBtn = document.getElementById('special-withdraw-btn');
        
        if (canWithdraw && (poolAmount > 0 || specialAmount > 0)) {
            poolBtn.disabled = false;
            specialBtn.disabled = false;
        } else {
            poolBtn.disabled = true;
            specialBtn.disabled = true;
        }
            
    } catch (err) {
        console.error('Error updating withdraw info:', err);
    }
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

// تابع بروزرسانی تایمر
function updateCountdown() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;
    
    const countdownDisplay = document.getElementById('countdown-timer');
    countdownDisplay.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (countdownTime <= 0) {
        countdownDisplay.textContent = '00:00:00';
        canWithdraw = true;
        updateWithdrawInfo();
        showMessage('اکنون می‌توانید برداشت کنید!', 'success');
    } else {
        countdownTime--;
    }
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
    setInterval(updateCountdown, 1000);
});