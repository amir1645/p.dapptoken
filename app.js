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

// ABI کامل قرارداد
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
    },
    {
        "inputs": [],
        "name": "registrationFee",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    // توابع جدید برای تایمر و وضعیت برداشت
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserWithdrawStatus",
        "outputs": [
            {"internalType": "uint256", "name": "lastWithdrawTime", "type": "uint256"},
            {"internalType": "uint256", "name": "nextWithdrawTime", "type": "uint256"},
            {"internalType": "bool", "name": "canWithdraw", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserMinerProgress",
        "outputs": [
            {"internalType": "uint256", "name": "paidAmount", "type": "uint256"},
            {"internalType": "uint256", "name": "totalRequired", "type": "uint256"},
            {"internalType": "uint256", "name": "progressPercentage", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    // توابع جدید برای استخر ماینر
    {
        "inputs": [],
        "name": "getMinerPoolInfo",
        "outputs": [
            {"internalType": "uint256", "name": "totalMaticInPool", "type": "uint256"},
            {"internalType": "uint256", "name": "availableTokensForDistribution", "type": "uint256"},
            {"internalType": "uint256", "name": "totalDistributedTokens", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minerTokenBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinerConversionRate",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserMinerEarnings",
        "outputs": [
            {"internalType": "uint256", "name": "pendingTokens", "type": "uint256"},
            {"internalType": "uint256", "name": "claimedTokens", "type": "uint256"},
            {"internalType": "uint256", "name": "totalEarnings", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    // توابع جدید برای بخش برداشت
    {
        "inputs": [],
        "name": "getPoolStats",
        "outputs": [
            {"internalType": "uint256", "name": "totalBalance", "type": "uint256"},
            {"internalType": "uint256", "name": "eligibleUsers", "type": "uint256"},
            {"internalType": "uint256", "name": "totalDistributed", "type": "uint256"},
            {"internalType": "uint256", "name": "pendingDistribution", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSpecialPoolStats",
        "outputs": [
            {"internalType": "uint256", "name": "totalBalance", "type": "uint256"},
            {"internalType": "uint256", "name": "eligibleUsers", "type": "uint256"},
            {"internalType": "uint256", "name": "totalDistributed", "type": "uint256"},
            {"internalType": "uint256", "name": "pendingDistribution", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWithdrawQueueInfo",
        "outputs": [
            {"internalType": "uint256", "name": "queueLength", "type": "uint256"},
            {"internalType": "uint256", "name": "processedCount", "type": "uint256"},
            {"internalType": "uint256", "name": "waitingCount", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserWithdrawEligibility",
        "outputs": [
            {"internalType": "bool", "name": "isEligibleForPool", "type": "bool"},
            {"internalType": "bool", "name": "isEligibleForSpecial", "type": "bool"},
            {"internalType": "uint256", "name": "poolShare", "type": "uint256"},
            {"internalType": "uint256", "name": "specialShare", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawCycleInfo",
        "outputs": [
            {"internalType": "uint256", "name": "currentCycle", "type": "uint256"},
            {"internalType": "uint256", "name": "cycleStartTime", "type": "uint256"},
            {"internalType": "uint256", "name": "cycleEndTime", "type": "uint256"},
            {"internalType": "uint256", "name": "totalCycles", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    // توابع جدید برای توکن P
    {
        "inputs": [],
        "name": "getPTokenPrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getPTokenBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getDailyReward",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getMonthlyReward",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRewardPercentage",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalDistributedPTokens",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
        "name": "buyPTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
        "name": "stakePTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// متغیرهای گلوبال
let provider = null;
let signer = null;
let contract = null;
let userAccount = null;
let countdownInterval = null;
let canWithdraw = false;
let lastPrice = null;

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
        
        // شروع تایمر
        startCountdownTimer();
        
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
    
    // توقف تایمر
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    document.getElementById('account').style.display = 'none';
    document.getElementById('connect-btn').style.display = 'flex';
    document.getElementById('disconnect-btn').style.display = 'none';
    
    document.getElementById('unregistered-view').style.display = 'block';
    document.getElementById('registered-view').style.display = 'none';
    
    // بازنشانی تایمر
    document.getElementById('countdown-timer').textContent = '00:00:00';
    
    showMessage('اتصال قطع شد', 'info');
}

// تابع شروع تایمر
async function startCountdownTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    countdownInterval = setInterval(async () => {
        await updateCountdown();
    }, 1000);
}

// تابع بروزرسانی تایمر از قرارداد
async function updateCountdown() {
    if (!contract || !userAccount) return;

    try {
        // تلاش برای دریافت وضعیت تایمر از قرارداد
        let withdrawStatus;
        try {
            withdrawStatus = await contract.getUserWithdrawStatus(userAccount);
        } catch (error) {
            // اگر تابع وجود نداشت، از منطق قبلی استفاده کن
            console.log('Using fallback timer logic');
            await updateCountdownFallback();
            return;
        }
        
        const nextWithdrawTime = parseInt(withdrawStatus.nextWithdrawTime);
        const currentTime = Math.floor(Date.now() / 1000);
        const timeRemaining = nextWithdrawTime - currentTime;
        
        canWithdraw = withdrawStatus.canWithdraw;
        
        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = timeRemaining % 60;
            
            const countdownDisplay = document.getElementById('countdown-timer');
            countdownDisplay.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            document.getElementById('countdown-timer').textContent = '00:00:00';
            canWithdraw = true;
        }
        
        // بروزرسانی وضعیت دکمه‌های برداشت
        await updateWithdrawInfo();
        
    } catch (err) {
        console.error('Error updating countdown:', err);
        await updateCountdownFallback();
    }
}

// تابع جایگزین برای تایمر (اگر تابع قرارداد موجود نبود)
async function updateCountdownFallback() {
    // اینجا می‌توانید منطق تایمر قبلی را قرار دهید
    // یا از localStorage برای ذخیره زمان استفاده کنید
    console.log('Using fallback countdown logic');
}

// تابع بررسی وضعیت ثبت‌نام
async function checkRegistrationStatus() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        
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
        
        // ایجاد بخش اطلاعات کاربر انتخاب شده
        createUserInfoPanel();
        
        const treeHTML = await buildBinaryTree(user.id, 0);
        treeContainer.innerHTML = treeHTML;
        
        // بروزرسانی آمار
        document.getElementById('total-members').textContent = await calculateTotalMembers(user.id);
        document.getElementById('left-members').textContent = user.leftCount.toString();
        document.getElementById('right-members').textContent = user.rightCount.toString();
        
        // اضافه کردن دکمه بازگشت
        addReturnButton();
        
        // انتخاب خودکار کاربر جاری
        setTimeout(() => {
            selectUser(user.id, true);
        }, 500);
        
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

// تابع ایجاد پنل اطلاعات کاربر
function createUserInfoPanel() {
    let infoPanel = document.getElementById('user-info-panel');
    
    if (!infoPanel) {
        infoPanel = document.createElement('div');
        infoPanel.id = 'user-info-panel';
        infoPanel.className = 'user-info-panel';
        infoPanel.innerHTML = `
            <div class="panel-header">
                <h3>اطلاعات کاربر انتخاب شده</h3>
                <button onclick="closeUserInfoPanel()" class="btn-close-panel">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="panel-content">
                <div class="user-basic-info">
                    <div class="user-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="user-details">
                        <div class="user-id-display">
                            <span class="label">شناسه کاربری:</span>
                            <span class="value" id="selected-user-id">-</span>
                        </div>
                        <div class="user-address">
                            <span class="label">آدرس:</span>
                            <span class="value" id="selected-user-address">-</span>
                        </div>
                    </div>
                </div>
                
                <div class="user-stats-grid">
                    <div class="user-stat-card">
                        <div class="stat-icon left">
                            <i class="fas fa-arrow-left"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">تیم چپ</span>
                            <span class="stat-value" id="selected-user-left">0</span>
                        </div>
                    </div>
                    
                    <div class="user-stat-card">
                        <div class="stat-icon right">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">تیم راست</span>
                            <span class="stat-value" id="selected-user-right">0</span>
                        </div>
                    </div>
                    
                    <div class="user-stat-card">
                        <div class="stat-icon total">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">کل تیم</span>
                            <span class="stat-value" id="selected-user-total">0</span>
                        </div>
                    </div>
                    
                    <div class="user-stat-card">
                        <div class="stat-icon balance">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">تعادل‌ها</span>
                            <span class="stat-value" id="selected-user-balance">0</span>
                        </div>
                    </div>
                </div>
                
                <div class="user-directs-info">
                    <h4>افراد مستقیم</h4>
                    <div class="directs-container">
                        <div class="direct-item left">
                            <i class="fas fa-arrow-left"></i>
                            <span class="direct-label">سمت چپ:</span>
                            <span class="direct-value" id="selected-user-direct-left">-</span>
                        </div>
                        <div class="direct-item right">
                            <i class="fas fa-arrow-right"></i>
                            <span class="direct-label">سمت راست:</span>
                            <span class="direct-value" id="selected-user-direct-right">-</span>
                        </div>
                    </div>
                </div>
                
                <div class="user-actions">
                    <button onclick="viewUserGenealogy()" class="btn-view-tree">
                        <i class="fas fa-sitemap"></i>
                        مشاهده ژنولوژی این کاربر
                    </button>
                </div>
            </div>
        `;
        
        const genealogyContainer = document.querySelector('.genealogy-container');
        genealogyContainer.appendChild(infoPanel);
    }
}

// تابع انتخاب کاربر
async function selectUser(userId, isCurrentUser = false) {
    try {
        // حذف کلاس active از همه نودها
        document.querySelectorAll('.node-box').forEach(node => {
            node.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به نود انتخاب شده
        const selectedNode = document.querySelector(`.node-box[data-user-id="${userId}"]`);
        if (selectedNode) {
            selectedNode.classList.add('active');
        }
        
        // دریافت اطلاعات کاربر از قرارداد
        const userInfo = await contract._getSpecialUserInfoForMigrateToNewFork(userId);
        const directs = await contract.getUserDirects(userId);
        
        // بروزرسانی پنل اطلاعات
        document.getElementById('selected-user-id').textContent = userInfo.id.toString();
        document.getElementById('selected-user-address').textContent = 
            `${userInfo.userAddress.substring(0, 8)}...${userInfo.userAddress.substring(36)}`;
        
        document.getElementById('selected-user-left').textContent = userInfo.leftCount.toString();
        document.getElementById('selected-user-right').textContent = userInfo.rightCount.toString();
        document.getElementById('selected-user-total').textContent = (parseInt(userInfo.leftCount) + parseInt(userInfo.rightCount)).toString();
        document.getElementById('selected-user-balance').textContent = userInfo.balanceCount.toString();
        
        // نمایش افراد مستقیم
        document.getElementById('selected-user-direct-left').textContent = 
            directs.leftId.toString() !== '0' ? directs.leftId.toString() : 'خالی';
        document.getElementById('selected-user-direct-right').textContent = 
            directs.rightId.toString() !== '0' ? directs.rightId.toString() : 'خالی';
        
        // نمایش پنل اطلاعات
        document.getElementById('user-info-panel').classList.add('active');
        
        // ذخیره کاربر انتخاب شده
        window.selectedUserId = userId;
        window.isCurrentUserSelected = isCurrentUser;
        
    } catch (err) {
        console.error('Error selecting user:', err);
        showMessage('خطا در دریافت اطلاعات کاربر', 'error');
    }
}

// تابع بستن پنل اطلاعات
function closeUserInfoPanel() {
    document.getElementById('user-info-panel').classList.remove('active');
    
    // حذف کلاس active از همه نودها
    document.querySelectorAll('.node-box').forEach(node => {
        node.classList.remove('active');
    });
}

// تابع مشاهده ژنولوژی کاربر انتخاب شده
async function viewUserGenealogy() {
    if (!window.selectedUserId) return;
    
    showMessage('در حال بارگذاری ژنولوژی کاربر...', 'info');
    
    try {
        const treeHTML = await buildBinaryTree(window.selectedUserId, 0);
        document.getElementById('genealogy-tree').innerHTML = treeHTML;
        
        // بروزرسانی آمار برای کاربر انتخاب شده
        const userInfo = await contract._getSpecialUserInfoForMigrateToNewFork(window.selectedUserId);
        document.getElementById('total-members').textContent = await calculateTotalMembers(window.selectedUserId);
        document.getElementById('left-members').textContent = userInfo.leftCount.toString();
        document.getElementById('right-members').textContent = userInfo.rightCount.toString();
        
        // انتخاب خودکار کاربر
        setTimeout(() => {
            selectUser(window.selectedUserId, window.selectedUserId === window.selectedUserId);
        }, 500);
        
        showMessage('ژنولوژی کاربر با موفقیت بارگذاری شد', 'success');
        
    } catch (err) {
        console.error('Error viewing user genealogy:', err);
        showMessage('خطا در بارگذاری ژنولوژی کاربر', 'error');
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
                <div class="node-box ${isCurrentUser ? 'current-user' : ''}" 
                     data-user-id="${user.id.toString()}"
                     onclick="selectUser('${user.id.toString()}', ${isCurrentUser})">
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

// تابع بازگشت به کاربر اصلی
function returnToCurrentUser() {
    if (!userAccount) return;
    
    showMessage('در حال بازگشت به ژنولوژی شما...', 'info');
    
    setTimeout(async () => {
        try {
            const user = await contract.getUserInfo(userAccount);
            const treeHTML = await buildBinaryTree(user.id, 0);
            document.getElementById('genealogy-tree').innerHTML = treeHTML;
            
            // بروزرسانی آمار
            document.getElementById('total-members').textContent = await calculateTotalMembers(user.id);
            document.getElementById('left-members').textContent = user.leftCount.toString();
            document.getElementById('right-members').textContent = user.rightCount.toString();
            
            // انتخاب خودکار کاربر جاری
            setTimeout(() => {
                selectUser(user.id, true);
            }, 500);
            
            showMessage('بازگشت به ژنولوژی شما', 'success');
            
        } catch (err) {
            console.error('Error returning to current user:', err);
            showMessage('خطا در بازگشت به ژنولوژی', 'error');
        }
    }, 1000);
}

// اضافه کردن دکمه بازگشت به هدر ژنولوژی
function addReturnButton() {
    const sectionHeader = document.querySelector('#tree-tab .section-header');
    if (!sectionHeader.querySelector('.btn-return')) {
        const returnButton = document.createElement('button');
        returnButton.className = 'btn-return';
        returnButton.innerHTML = '<i class="fas fa-home"></i>';
        returnButton.title = 'بازگشت به ژنولوژی من';
        returnButton.onclick = returnToCurrentUser;
        sectionHeader.appendChild(returnButton);
    }
}

// توابع ماینر
async function contributeToMiner() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }

    try {
        showMessage('در حال خرید توکن...', 'info');
        
        const tx = await contract.contributeToMinerPool({
            value: ethers.utils.parseEther('0.1'),
            gasLimit: 300000
        });
        
        await tx.wait();
        
        showMessage('خرید توکن با موفقیت انجام شد!', 'success');
        await updateMinerStats();
        
    } catch (err) {
        console.error('Contribution error:', err);
        showMessage('خطا در خرید توکن: ' + (err.reason || err.message), 'error');
    }
}

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
        
        // دریافت اطلاعات استخر ماینر
        let minerPoolInfo = {
            totalMaticInPool: '0',
            availableTokensForDistribution: '0',
            totalDistributedTokens: '0'
        };
        
        let minerTokenBalance = '0';
        let conversionRate = '0';
        let userMinerEarnings = {
            pendingTokens: '0',
            claimedTokens: '0',
            totalEarnings: '0'
        };
        
        try {
            // دریافت اطلاعات استخر ماینر
            minerPoolInfo = await contract.getMinerPoolInfo();
        } catch (error) {
            console.log('getMinerPoolInfo not available, using fallback');
            minerPoolInfo = await getMinerPoolInfoFallback();
        }
        
        try {
            // موجودی توکن ماینر
            minerTokenBalance = await contract.minerTokenBalance();
        } catch (error) {
            console.log('minerTokenBalance not available');
            minerTokenBalance = await getMinerTokenBalanceFallback();
        }
        
        try {
            // نرخ تبدیل
            conversionRate = await contract.getMinerConversionRate();
        } catch (error) {
            console.log('getMinerConversionRate not available');
            // نرخ تبدیل پیش‌فرض
            conversionRate = ethers.utils.parseEther('100'); // 1 پالیگان = 100 توکن
        }
        
        try {
            // درآمدهای ماینر کاربر
            userMinerEarnings = await contract.getUserMinerEarnings(userAccount);
        } catch (error) {
            console.log('getUserMinerEarnings not available');
        }
        
        // دریافت درصد پیشرفت پالیگان از قرارداد
        let polygonProgress = 0;
        try {
            const minerProgress = await contract.getUserMinerProgress(userAccount);
            polygonProgress = parseInt(minerProgress.progressPercentage);
        } catch (progressError) {
            // اگر تابع وجود نداشت، از منطق قبلی استفاده کن
            console.log('Using fallback progress calculation');
            polygonProgress = Math.min(100, (parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0')) / 10) * 100);
        }
        
        // بروزرسانی وضعیت ماینر
        const minerStatus = userInfo.isMiner ? 'فعال' : 'غیرفعال';
        document.getElementById('miner-status').textContent = minerStatus;
        document.getElementById('miner-rewards').textContent = 
            ethers.utils.formatEther(userInfo.totalMinerRewards || '0') + ' PToken';
        
        // بروزرسانی موجودی پالیگان
        await updateWalletBalance();
        
        // نمایش اطلاعات استخر ماینر
        const totalMaticInPool = parseFloat(ethers.utils.formatEther(minerPoolInfo.totalMaticInPool || '0'));
        const availableTokens = parseFloat(ethers.utils.formatEther(minerPoolInfo.availableTokensForDistribution || minerTokenBalance || '0'));
        
        // بروزرسانی موجودی‌ها برای خرید و توزیع
        const balance = await provider.getBalance(userAccount);
        document.getElementById('available-polygon').textContent = 
            parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + ' پالیگان';
        
        document.getElementById('available-miner-tokens').textContent = 
            availableTokens.toFixed(2) + ' PToken';
        
        // بروزرسانی درصد پرداخت پالیگان
        document.getElementById('polygon-progress').textContent = `${Math.round(polygonProgress)}%`;
        document.getElementById('polygon-progress-bar').style.width = `${polygonProgress}%`;
        document.getElementById('payment-percentage').textContent = `${Math.round(polygonProgress)}%`;
        
        // بروزرسانی توکن قابل خرید
        const availableTokensForPurchase = 10 - parseFloat(ethers.utils.formatEther(userInfo.totalMinerRewards || '0'));
        document.getElementById('available-tokens').textContent = 
            (availableTokensForPurchase > 0 ? availableTokensForPurchase.toFixed(2) : '0') + ' PToken';
        
        // نمایش اطلاعات استخر در بخش ماینر
        updateMinerPoolDisplay(totalMaticInPool, availableTokens, conversionRate);
        
    } catch (err) {
        console.error('Error updating miner stats:', err);
        showMessage('خطا در بروزرسانی آمار ماینر', 'error');
    }
}

// تابع برای نمایش اطلاعات استخر ماینر
function updateMinerPoolDisplay(totalMatic, availableTokens, conversionRate) {
    // ایجاد یا بروزرسانی نمایش اطلاعات استخر
    let poolInfoElement = document.getElementById('miner-pool-info');
    
    if (!poolInfoElement) {
        poolInfoElement = document.createElement('div');
        poolInfoElement.id = 'miner-pool-info';
        poolInfoElement.className = 'miner-pool-info';
        poolInfoElement.innerHTML = `
            <div class="pool-stats-overview">
                <h3>اطلاعات استخر ماینر</h3>
                <div class="pool-stat-row">
                    <div class="pool-stat-item">
                        <i class="fas fa-coins"></i>
                        <span class="pool-stat-label">پالیگان موجود برای تبدیل</span>
                        <span class="pool-stat-value" id="pool-matic-amount">0</span>
                    </div>
                    <div class="pool-stat-item">
                        <i class="fas fa-gem"></i>
                        <span class="pool-stat-label">توکن‌های قابل توزیع</span>
                        <span class="pool-stat-value" id="pool-tokens-amount">0</span>
                    </div>
                    <div class="pool-stat-item">
                        <i class="fas fa-exchange-alt"></i>
                        <span class="pool-stat-label">نرخ تبدیل</span>
                        <span class="pool-stat-value" id="conversion-rate">0</span>
                    </div>
                </div>
            </div>
        `;
        
        // اضافه کردن به بخش ماینر
        const minerContainer = document.querySelector('.miner-container');
        const minerActions = document.querySelector('.miner-actions');
        minerContainer.insertBefore(poolInfoElement, minerActions);
    }
    
    // نمایش اطلاعات استخر
    poolInfoElement.style.display = 'block';
    
    // بروزرسانی مقادیر
    document.getElementById('pool-matic-amount').textContent = totalMatic.toFixed(4) + ' پالیگان';
    document.getElementById('pool-tokens-amount').textContent = availableTokens.toFixed(2) + ' PToken';
    document.getElementById('conversion-rate').textContent = `1 پالیگان = ${parseFloat(ethers.utils.formatEther(conversionRate)).toFixed(0)} توکن`;
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

    if (!canWithdraw) {
        showMessage('هنوز زمان برداشت فرا نرسیده است', 'error');
        return;
    }

    try {
        showMessage('در حال برداشت از استخر...', 'info');
        
        const tx = await contract.withdrawPool({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('برداشت با موفقیت انجام شد!', 'success');
        
        // بروزرسانی وضعیت تایمر پس از برداشت
        await updateCountdown();
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
        
        const tx = await contract.withdrawSpecials({ gasLimit: 300000 });
        await tx.wait();
        
        showMessage('برداشت ویژه با موفقیت انجام شد!', 'success');
        
        // بروزرسانی وضعیت تایمر پس از برداشت
        await updateCountdown();
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
        // دریافت اطلاعات از قرارداد
        let poolStats = {
            totalBalance: '0',
            eligibleUsers: '0',
            totalDistributed: '0',
            pendingDistribution: '0'
        };
        
        let specialPoolStats = {
            totalBalance: '0',
            eligibleUsers: '0',
            totalDistributed: '0',
            pendingDistribution: '0'
        };
        
        let withdrawQueueInfo = {
            queueLength: '0',
            processedCount: '0',
            waitingCount: '0'
        };
        
        let userEligibility = {
            isEligibleForPool: false,
            isEligibleForSpecial: false,
            poolShare: '0',
            specialShare: '0'
        };
        
        let cycleInfo = {
            currentCycle: '0',
            cycleStartTime: '0',
            cycleEndTime: '0',
            totalCycles: '0'
        };
        
        // دریافت اطلاعات از قرارداد
        try {
            poolStats = await contract.getPoolStats();
        } catch (error) {
            console.log('getPoolStats not available, using poolBalance');
            const poolBalance = await contract.poolBalance();
            poolStats.totalBalance = poolBalance;
        }
        
        try {
            specialPoolStats = await contract.getSpecialPoolStats();
        } catch (error) {
            console.log('getSpecialPoolStats not available');
        }
        
        try {
            withdrawQueueInfo = await contract.getWithdrawQueueInfo();
        } catch (error) {
            console.log('getWithdrawQueueInfo not available');
        }
        
        try {
            userEligibility = await contract.getUserWithdrawEligibility(userAccount);
        } catch (error) {
            console.log('getUserWithdrawEligibility not available');
        }
        
        try {
            cycleInfo = await contract.withdrawCycleInfo();
        } catch (error) {
            console.log('withdrawCycleInfo not available');
        }
        
        const userInfo = await contract.getUserInfo(userAccount);
        
        // تبدیل مقادیر به اعداد قابل فهم
        const poolTotalBalance = parseFloat(ethers.utils.formatEther(poolStats.totalBalance || '0'));
        const poolEligibleUsers = parseInt(poolStats.eligibleUsers || userInfo.balanceCount || '0');
        
        const specialTotalBalance = parseFloat(ethers.utils.formatEther(specialPoolStats.totalBalance || userInfo.specialBalanceCount || '0'));
        const specialEligibleUsers = parseInt(specialPoolStats.eligibleUsers || userInfo.specialBalanceCount || '0');
        
        // بروزرسانی نمایش اصلی
        document.getElementById('pool-balance').textContent = poolTotalBalance.toFixed(4);
        document.getElementById('special-balance').textContent = specialTotalBalance.toFixed(4);
        
        document.getElementById('pool-balance-count').textContent = poolEligibleUsers.toString();
        document.getElementById('special-balance-count').textContent = specialEligibleUsers.toString();
        
        // محاسبه مقادیر قابل برداشت
        const userPoolShare = parseFloat(ethers.utils.formatEther(userEligibility.poolShare || '0'));
        const userSpecialShare = parseFloat(ethers.utils.formatEther(userEligibility.specialShare || '0'));
        
        // اگر اطلاعات سهم کاربر موجود نبود، از محاسبه پیش‌فرض استفاده کن
        const poolAmount = userPoolShare > 0 ? userPoolShare : (poolTotalBalance * 0.1);
        const specialAmount = userSpecialShare > 0 ? userSpecialShare : (specialTotalBalance * 0.1);
        
        document.getElementById('pool-amount').textContent = poolAmount.toFixed(4);
        document.getElementById('special-amount').textContent = specialAmount.toFixed(4);
        
        // نمایش اطلاعات پیشرفته برداشت
        updateWithdrawAdvancedDisplay(
            poolStats,
            specialPoolStats,
            withdrawQueueInfo,
            userEligibility,
            cycleInfo
        );
        
        // به‌روزرسانی وضعیت دکمه‌های برداشت
        const poolBtn = document.getElementById('pool-withdraw-btn');
        const specialBtn = document.getElementById('special-withdraw-btn');
        
        const canWithdrawPool = canWithdraw && (poolAmount > 0) && userEligibility.isEligibleForPool;
        const canWithdrawSpecial = canWithdraw && (specialAmount > 0) && userEligibility.isEligibleForSpecial;
        
        if (canWithdrawPool) {
            poolBtn.disabled = false;
            poolBtn.innerHTML = '<i class="fas fa-download"></i> دریافت پاداش';
            poolBtn.style.background = 'linear-gradient(135deg, var(--success), var(--success-dark))';
        } else {
            poolBtn.disabled = true;
            poolBtn.innerHTML = '<i class="fas fa-clock"></i> منتظر زمان برداشت';
            poolBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        }
        
        if (canWithdrawSpecial) {
            specialBtn.disabled = false;
            specialBtn.innerHTML = '<i class="fas fa-download"></i> دریافت ویژه';
            specialBtn.style.background = 'linear-gradient(135deg, var(--success), var(--success-dark))';
        } else {
            specialBtn.disabled = true;
            specialBtn.innerHTML = '<i class="fas fa-clock"></i> منتظر زمان برداشت';
            specialBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        }
            
    } catch (err) {
        console.error('Error updating withdraw info:', err);
        showMessage('خطا در بروزرسانی اطلاعات برداشت', 'error');
    }
}

// تابع برای نمایش اطلاعات پیشرفته برداشت
function updateWithdrawAdvancedDisplay(poolStats, specialPoolStats, withdrawQueueInfo, userEligibility, cycleInfo) {
    // ایجاد یا بروزرسانی نمایش اطلاعات پیشرفته
    let advancedInfoElement = document.getElementById('withdraw-advanced-info');
    
    if (!advancedInfoElement) {
        advancedInfoElement = document.createElement('div');
        advancedInfoElement.id = 'withdraw-advanced-info';
        advancedInfoElement.className = 'withdraw-advanced-info';
        advancedInfoElement.innerHTML = `
            <div class="advanced-stats-container">
                <h3>اطلاعات دقیق استخرها</h3>
                
                <div class="advanced-pools-grid">
                    <!-- استخر اصلی -->
                    <div class="advanced-pool-card">
                        <div class="pool-card-header">
                            <i class="fas fa-wallet"></i>
                            <h4>استخر اصلی</h4>
                        </div>
                        <div class="pool-stats-details">
                            <div class="pool-stat-detail">
                                <span class="detail-label">کل موجودی پالیگان:</span>
                                <span class="detail-value" id="pool-total-matic">0</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">تعداد واجد شرایط:</span>
                                <span class="detail-value" id="pool-eligible-count">0 نفر</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">توزیع شده:</span>
                                <span class="detail-value" id="pool-distributed">0 پالیگان</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">در صف توزیع:</span>
                                <span class="detail-value" id="pool-pending">0 پالیگان</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- استخر ویژه -->
                    <div class="advanced-pool-card">
                        <div class="pool-card-header">
                            <i class="fas fa-gem"></i>
                            <h4>استخر ویژه</h4>
                        </div>
                        <div class="pool-stats-details">
                            <div class="pool-stat-detail">
                                <span class="detail-label">کل موجودی پالیگان:</span>
                                <span class="detail-value" id="special-total-matic">0</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">تعداد واجد شرایط:</span>
                                <span class="detail-value" id="special-eligible-count">0 نفر</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">توزیع شده:</span>
                                <span class="detail-value" id="special-distributed">0 پالیگان</span>
                            </div>
                            <div class="pool-stat-detail">
                                <span class="detail-label">در صف توزیع:</span>
                                <span class="detail-value" id="special-pending">0 پالیگان</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- اطلاعات صف و سیکل -->
                <div class="queue-cycle-info">
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-list-ol"></i>
                            <h4>اطلاعات صف برداشت</h4>
                        </div>
                        <div class="info-content">
                            <div class="info-row">
                                <span>طول صف:</span>
                                <strong id="queue-length">0</strong>
                            </div>
                            <div class="info-row">
                                <span>پردازش شده:</span>
                                <strong id="processed-count">0</strong>
                            </div>
                            <div class="info-row">
                                <span>در انتظار:</span>
                                <strong id="waiting-count">0</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <i class="fas fa-sync-alt"></i>
                            <h4>اطلاعات سیکل</h4>
                        </div>
                        <div class="info-content">
                            <div class="info-row">
                                <span>سیکل جاری:</span>
                                <strong id="current-cycle">0</strong>
                            </div>
                            <div class="info-row">
                                <span>کل سیکل‌ها:</span>
                                <strong id="total-cycles">0</strong>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- وضعیت کاربر -->
                <div class="user-eligibility-status">
                    <h4>وضعیت واجد شرایط بودن شما</h4>
                    <div class="eligibility-cards">
                        <div class="eligibility-card" id="pool-eligibility">
                            <i class="fas fa-wallet"></i>
                            <span>استخر اصلی</span>
                            <div class="status-badge">غیرفعال</div>
                        </div>
                        <div class="eligibility-card" id="special-eligibility">
                            <i class="fas fa-gem"></i>
                            <span>استخر ویژه</span>
                            <div class="status-badge">غیرفعال</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // اضافه کردن به بخش برداشت
        const withdrawContainer = document.querySelector('.withdraw-container');
        const countdownTimer = document.querySelector('.countdown-timer');
        withdrawContainer.insertBefore(advancedInfoElement, countdownTimer.nextSibling);
    }
    
    // نمایش اطلاعات پیشرفته
    advancedInfoElement.style.display = 'block';
    
    // بروزرسانی مقادیر استخر اصلی
    document.getElementById('pool-total-matic').textContent = 
        parseFloat(ethers.utils.formatEther(poolStats.totalBalance || '0')).toFixed(4) + ' پالیگان';
    document.getElementById('pool-eligible-count').textContent = 
        (parseInt(poolStats.eligibleUsers || '0') || 0) + ' نفر';
    document.getElementById('pool-distributed').textContent = 
        parseFloat(ethers.utils.formatEther(poolStats.totalDistributed || '0')).toFixed(4) + ' پالیگان';
    document.getElementById('pool-pending').textContent = 
        parseFloat(ethers.utils.formatEther(poolStats.pendingDistribution || '0')).toFixed(4) + ' پالیگان';
    
    // بروزرسانی مقادیر استخر ویژه
    document.getElementById('special-total-matic').textContent = 
        parseFloat(ethers.utils.formatEther(specialPoolStats.totalBalance || '0')).toFixed(4) + ' پالیگان';
    document.getElementById('special-eligible-count').textContent = 
        (parseInt(specialPoolStats.eligibleUsers || '0') || 0) + ' نفر';
    document.getElementById('special-distributed').textContent = 
        parseFloat(ethers.utils.formatEther(specialPoolStats.totalDistributed || '0')).toFixed(4) + ' پالیگان';
    document.getElementById('special-pending').textContent = 
        parseFloat(ethers.utils.formatEther(specialPoolStats.pendingDistribution || '0')).toFixed(4) + ' پالیگان';
    
    // بروزرسانی اطلاعات صف
    document.getElementById('queue-length').textContent = parseInt(withdrawQueueInfo.queueLength || '0');
    document.getElementById('processed-count').textContent = parseInt(withdrawQueueInfo.processedCount || '0');
    document.getElementById('waiting-count').textContent = parseInt(withdrawQueueInfo.waitingCount || '0');
    
    // بروزرسانی اطلاعات سیکل
    document.getElementById('current-cycle').textContent = parseInt(cycleInfo.currentCycle || '0');
    document.getElementById('total-cycles').textContent = parseInt(cycleInfo.totalCycles || '0');
    
    // بروزرسانی وضعیت کاربر
    const poolEligibilityCard = document.getElementById('pool-eligibility');
    const specialEligibilityCard = document.getElementById('special-eligibility');
    
    const poolStatusBadge = poolEligibilityCard.querySelector('.status-badge');
    const specialStatusBadge = specialEligibilityCard.querySelector('.status-badge');
    
    if (userEligibility.isEligibleForPool) {
        poolStatusBadge.textContent = 'فعال';
        poolStatusBadge.className = 'status-badge eligible';
        poolEligibilityCard.style.borderColor = 'var(--success)';
    } else {
        poolStatusBadge.textContent = 'غیرفعال';
        poolStatusBadge.className = 'status-badge not-eligible';
        poolEligibilityCard.style.borderColor = 'var(--secondary)';
    }
    
    if (userEligibility.isEligibleForSpecial) {
        specialStatusBadge.textContent = 'فعال';
        specialStatusBadge.className = 'status-badge eligible';
        specialEligibilityCard.style.borderColor = 'var(--success)';
    } else {
        specialStatusBadge.textContent = 'غیرفعال';
        specialStatusBadge.className = 'status-badge not-eligible';
        specialEligibilityCard.style.borderColor = 'var(--secondary)';
    }
}

// توابع جدید برای تب توکن P
async function updatePTokenInfo() {
    if (!contract || !userAccount) return;
    
    try {
        // دریافت اطلاعات توکن P از قرارداد
        let pTokenBalance = '0';
        let pTokenPrice = '0';
        let dailyReward = '0';
        let monthlyReward = '0';
        let rewardPercentage = '0';
        let totalDistributed = '0';
        
        // قیمت روز اول (ثابت)
        const initialPrice = 0.00001; // 0.00001 پالیگان
        
        try {
            // دریافت قیمت توکن از قرارداد
            pTokenPrice = await contract.getPTokenPrice();
            pTokenBalance = await contract.getPTokenBalance(userAccount);
            dailyReward = await contract.getDailyReward(userAccount);
            monthlyReward = await contract.getMonthlyReward(userAccount);
            rewardPercentage = await contract.getRewardPercentage();
            totalDistributed = await contract.getTotalDistributedPTokens();
        } catch (error) {
            console.log('Some PToken functions not available, using fallback');
            // استفاده از مقادیر پیش‌فرض برای تست
            pTokenPrice = ethers.utils.parseEther('0.01'); // قیمت هر توکن: 0.01 پالیگان
            pTokenBalance = ethers.utils.parseEther('1500');
            dailyReward = ethers.utils.parseEther('25');
            monthlyReward = ethers.utils.parseEther('750');
            rewardPercentage = '5'; // 5%
            totalDistributed = ethers.utils.parseEther('50000');
        }
        
        // دریافت موجودی پالیگان کاربر
        let polygonBalance = '0';
        try {
            polygonBalance = await provider.getBalance(userAccount);
        } catch (error) {
            console.log('Error getting polygon balance');
        }
        
        // تبدیل قیمت به عدد
        const currentPrice = parseFloat(ethers.utils.formatEther(pTokenPrice));
        
        // محاسبه درصد رشد
        const growthPercentage = calculateGrowthPercentage(initialPrice, currentPrice);
        
        // بروزرسانی نمایش قیمت توکن
        const priceElement = document.getElementById('p-token-price');
        priceElement.textContent = currentPrice.toFixed(6);
        
        // اضافه کردن انیمیشن در صورت تغییر قیمت
        if (lastPrice && lastPrice !== currentPrice) {
            if (currentPrice > lastPrice) {
                priceElement.classList.add('price-up');
                setTimeout(() => priceElement.classList.remove('price-up'), 500);
            } else if (currentPrice < lastPrice) {
                priceElement.classList.add('price-down');
                setTimeout(() => priceElement.classList.remove('price-down'), 500);
            }
        }
        lastPrice = currentPrice;
        
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
        
        // بروزرسانی نمایش موجودی توکن P
        const tokenBalance = parseFloat(ethers.utils.formatEther(pTokenBalance));
        document.getElementById('p-token-balance').textContent = 
            tokenBalance.toFixed(2);
        
        // محاسبه و نمایش ارزش کل توکن‌های P
        const totalTokenValue = tokenBalance * currentPrice;
        document.getElementById('p-token-value').textContent = 
            '≈ ' + totalTokenValue.toFixed(4) + ' پالیگان';
        
        // نمایش موجودی پالیگان
        document.getElementById('polygon-balance').textContent = 
            parseFloat(ethers.utils.formatEther(polygonBalance)).toFixed(4);
        
        // بروزرسانی آمار دیگر
        document.getElementById('daily-reward').textContent = 
            parseFloat(ethers.utils.formatEther(dailyReward)).toFixed(2) + ' P';
        
        document.getElementById('monthly-reward').textContent = 
            parseFloat(ethers.utils.formatEther(monthlyReward)).toFixed(2) + ' P';
        
        document.getElementById('reward-percentage').textContent = 
            rewardPercentage + '%';
        
        document.getElementById('total-distributed').textContent = 
            parseFloat(ethers.utils.formatEther(totalDistributed)).toFixed(0) + ' P';
        
        // بروزرسانی تاریخچه تراکنش‌ها
        await updateTransactionHistory();
        
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

// تابع بروزرسانی تاریخچه تراکنش‌ها
async function updateTransactionHistory() {
    const transactionList = document.getElementById('p-token-transactions');
    
    try {
        // دریافت تاریخچه تراکنش‌ها از قرارداد
        // این بخش بستگی به پیاده‌سازی قرارداد دارد
        const transactions = await getPTokenTransactions();
        
        if (transactions.length === 0) {
            transactionList.innerHTML = `
                <div class="transaction-placeholder">
                    <i class="fas fa-receipt"></i>
                    <p>هنوز تراکنشی ثبت نشده است</p>
                </div>
            `;
            return;
        }
        
        let transactionsHTML = '';
        transactions.forEach(transaction => {
            const iconClass = transaction.type === 'buy' ? 'buy' : 
                            transaction.type === 'sell' ? 'sell' : 'reward';
            const amountClass = transaction.amount > 0 ? 'positive' : 'negative';
            const amountSign = transaction.amount > 0 ? '+' : '';
            
            transactionsHTML += `
                <div class="transaction-item">
                    <div class="transaction-icon ${iconClass}">
                        <i class="fas ${transaction.icon}"></i>
                    </div>
                    <div class="transaction-details">
                        <div class="transaction-type">${transaction.description}</div>
                        <div class="transaction-date">${transaction.date}</div>
                    </div>
                    <div class="transaction-amount ${amountClass}">
                        ${amountSign}${transaction.amount} P
                    </div>
                </div>
            `;
        });
        
        transactionList.innerHTML = transactionsHTML;
        
    } catch (err) {
        console.error('Error updating transaction history:', err);
    }
}

// تابع شبیه‌سازی شده برای دریافت تراکنش‌ها
async function getPTokenTransactions() {
    // این تابع باید با قرارداد واقعی جایگزین شود
    return [
        {
            type: 'buy',
            icon: 'fa-shopping-cart',
            description: 'خرید توکن P',
            date: '۱۴۰۲/۱۰/۱۵ - ۱۴:۳۰',
            amount: 1000
        },
        {
            type: 'reward',
            icon: 'fa-gift',
            description: 'سود روزانه',
            date: '۱۴۰۲/۱۰/۱۴ - ۰۸:۱۵',
            amount: 25
        },
        {
            type: 'reward',
            icon: 'fa-gift',
            description: 'سود شبکه',
            date: '۱۴۰۲/۱۰/۱۳ - ۰۸:۱۵',
            amount: 18.5
        },
        {
            type: 'buy',
            icon: 'fa-shopping-cart',
            description: 'خرید توکن P',
            date: '۱۴۰۲/۱۰/۱۰ - ۱۶:۴۵',
            amount: 500
        }
    ];
}

// توابع اقدامات توکن P
async function buyPTokens() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }
    
    showMessage('در حال خرید توکن P...', 'info');
    // پیاده‌سازی خرید توکن P
}

async function stakePTokens() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }
    
    showMessage('در حال استیک توکن P...', 'info');
    // پیاده‌سازی استیک توکن P
}

async function withdrawRewards() {
    if (!contract || !userAccount) {
        showMessage('لطفاً ابتدا به کیف پول متصل شوید', 'error');
        return;
    }
    
    showMessage('در حال دریافت سود...', 'info');
    // پیاده‌سازی دریافت سود
}

// توابع جایگزین
async function getMinerPoolInfoFallback() {
    // این مقادیر می‌توانند از قراردادهای دیگر یا محاسبات داخلی بیایند
    return {
        totalMaticInPool: ethers.utils.parseEther('1000'), // مثال: 1000 پالیگان
        availableTokensForDistribution: ethers.utils.parseEther('50000'), // مثال: 50000 توکن
        totalDistributedTokens: ethers.utils.parseEther('150000') // مثال: 150000 توکن توزیع شده
    };
}

async function getMinerTokenBalanceFallback() {
    return ethers.utils.parseEther('50000'); // مثال: 50000 توکن
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