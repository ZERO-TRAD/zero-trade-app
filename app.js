const defaultMarketData = [
  { symbol: 'NIFTY 50', price: 24720.4, change: 1.82, type: 'equity' },
  { symbol: 'BANK NIFTY', price: 52010.8, change: -0.61, type: 'fno' },
  { symbol: 'RELIANCE', price: 2897.15, change: 1.42, type: 'equity' },
  { symbol: 'TCS', price: 3429.8, change: 0.9, type: 'intraday' },
  { symbol: 'BTC/USD', price: 66142.2, change: 2.6, type: 'crypto' },
  { symbol: 'ETH/USD', price: 3440.25, change: 1.8, type: 'crypto' },
  { symbol: 'NASDAQ', price: 19784.5, change: 0.74, type: 'global' },
  { symbol: 'DOW JONES', price: 42210.8, change: -0.21, type: 'global' },
  { symbol: 'GOLD', price: 7520.1, change: 0.38, type: 'global' },
  { symbol: 'EUR/USD', price: 1.0834, change: 0.12, type: 'global' },
  { symbol: 'AAPL', price: 214.96, change: 1.16, type: 'equity' },
  { symbol: 'TESLA', price: 244.36, change: -1.18, type: 'equity' }
];

const learnModules = [
  {
    title: 'Market Basics',
    description: 'Understand how price discovery, liquidity, and investor behavior affect markets.',
    duration: '4 min audio lesson'
  },
  {
    title: 'Risk Management',
    description: 'Use stop losses, position sizing, and discipline to stay in the game longer.',
    duration: '3 min practice module'
  },
  {
    title: 'Technical Signals',
    description: 'Learn basic support, resistance, trend lines, and momentum indicators.',
    duration: 'Quiz available'
  }
];

const translations = {
  en: {
    brandTag: 'Zero Trade',
    appName: 'Trade',
    navOverview: 'Overview',
    navMarkets: 'Markets',
    navPortfolio: 'Portfolio',
    navLearn: 'Learn',
    addFund: 'Add ₹1,00,000',
    virtualBalance: 'Virtual Balance',
    accountStatus: 'Practice mode active',
    portfolioValue: 'Portfolio Value',
    vitality: 'Account Energy',
    riskSummary: 'Balanced risk profile',
    marketOverview: 'Market overview',
    featureTitle: 'Trade across global markets',
    tradeDesk: 'Trade desk',
    orderTicket: 'Order ticket',
    asset: 'Asset',
    quantity: 'Quantity',
    orderType: 'Order type',
    marketOrder: 'Market',
    limitOrder: 'Limit',
    buyNow: 'Buy',
    sellNow: 'Sell',
    estimatedValue: 'Estimated value',
    availableCash: 'Available cash',
    watchlist: 'Watchlist',
    pricePulse: 'Price pulse',
    portfolioSection: 'Portfolio',
    holdingsTitle: 'Holdings',
    symbol: 'Symbol',
    qty: 'Qty',
    avgPrice: 'Avg Price',
    ltp: 'LTP',
    value: 'Value',
    pnl: 'P&L',
    profitLoss: 'Profit / Loss',
    donationTitle: 'Support learning & health',
    donateNow: 'Donate',
    education: 'Education',
    learningHub: 'Learning hub',
    toastTopup: '₹1,00,000 added to the virtual account. ₹23 is reserved as a support fee for education & health.',
    toastBuy: 'Buy order executed successfully.',
    toastSell: 'Sell order executed successfully.',
    toastDonate: 'Donation support note recorded for education and health programs.',
    toastInsufficient: 'Insufficient virtual balance for this order.',
    toastNoSell: 'You do not have enough quantity to sell.'
  },
  hi: {
    brandTag: 'जेड ट्रेड',
    appName: 'ट्रेड',
    navOverview: 'ओवरव्यू',
    navMarkets: 'मार्केट',
    navPortfolio: 'पोर्टफोलियो',
    navLearn: 'सीखें',
    addFund: '₹1,00,000 जोड़ें',
    virtualBalance: 'वर्चुअल बैलेंस',
    accountStatus: 'प्रैक्टिस मोड सक्रिय',
    portfolioValue: 'पोर्टफोलियो मूल्य',
    vitality: 'एकाउंट एनर्जी',
    riskSummary: 'संतुलित जोखिम प्रोफाइल',
    marketOverview: 'मार्केट ओवरव्यू',
    featureTitle: 'वैश्विक बाजारों में ट्रेड करें',
    tradeDesk: 'ट्रेड डेस्क',
    orderTicket: 'ऑर्डर टिकट',
    asset: 'एसेट',
    quantity: 'मात्रा',
    orderType: 'ऑर्डर प्रकार',
    marketOrder: 'मार्केट',
    limitOrder: 'लिमिट',
    buyNow: 'खरीदें',
    sellNow: 'बेचें',
    estimatedValue: 'अनुमानित मूल्य',
    availableCash: 'उपलब्ध कैश',
    watchlist: 'वॉचलिस्ट',
    pricePulse: 'प्राइस पल्स',
    portfolioSection: 'पोर्टफोलियो',
    holdingsTitle: 'होल्डिंग्स',
    symbol: 'सिंबल',
    qty: 'मात्रा',
    avgPrice: 'औसत कीमत',
    ltp: 'LTP',
    value: 'मूल्य',
    pnl: 'P&L',
    profitLoss: 'लाभ / हानि',
    donationTitle: 'शिक्षा और स्वास्थ्य समर्थन',
    donateNow: 'दान करें',
    education: 'शिक्षा',
    learningHub: 'लर्निंग हब',
    toastTopup: '₹1,00,000 वर्चुअल खाते में जुड़ गया। ₹23 सपोर्ट फी लागू है, शिक्षा और स्वास्थ्य के लिए।',
    toastBuy: 'खरीद ऑर्डर सफलतापूर्वक निष्पादित किया गया।',
    toastSell: 'विक्रय ऑर्डर सफलतापूर्वक निष्पादित किया गया।',
    toastDonate: 'शिक्षा और स्वास्थ्य कार्यक्रमों के लिए दान दर्ज किया गया।',
    toastInsufficient: 'इस ऑर्डर के लिए पर्याप्त वर्चुअल बैलेंस नहीं है।',
    toastNoSell: 'बेचने के लिए पर्याप्त मात्रा नहीं है।'
  },
  kn: {
    brandTag: 'ಜೀರೋ ಟ್ರೇಡ್',
    appName: 'ಟ್ರೇಡ್',
    navOverview: 'ಒವರ್‌ವ್ಯೂ',
    navMarkets: 'ಮಾರುಕಟ್ಟೆ',
    navPortfolio: 'ಪೋರ್ಟ್ಫೋಲಿಯೊ',
    navLearn: 'ಕಲಿತುಕೊಳ್ಳಿ',
    addFund: '₹1,00,000 ಸೇರಿಸಿ',
    virtualBalance: 'ವರ್ಚುವಲ್ ಬ್ಯಾಲೆನ್ಸ್',
    accountStatus: 'ಪ್ರ್ಯಾಕ್ಟಿಸ್ ಮೋಡ್ ಸಕ್ರಿಯ',
    portfolioValue: 'ಪೋರ್ಟ್ಫೋಲಿಯೊ ಮೌಲ್ಯ',
    vitality: 'ಖಾತೆ ಶಕ್ತಿ',
    riskSummary: 'ಸಮತೋಲಿತ ಅಪಾಯ ಪ್ರೊಫೈಲ್',
    marketOverview: 'ಮಾರ್ಕೆಟ್ ಓವರ್‌ವ್ಯೂ',
    featureTitle: 'ಜಾಗತಿಕ ಮಾರ್ಕೆಟ್‌ಗಳಲ್ಲಿ ವ್ಯಾಪಾರ ಮಾಡಿ',
    tradeDesk: 'ಟ್ರೇಡ್ ಡೆಸ್ಕ್',
    orderTicket: 'ಆರ್ಡರ್ ಟಿಕೆಟ್',
    asset: 'ಆಸ್ತಿ',
    quantity: 'ಪ್ರಮಾಣ',
    orderType: 'ಆರ್ಡರ್ ಪ್ರಕಾರ',
    marketOrder: 'ಮಾರ್ಕೆಟ್',
    limitOrder: 'ಲಿಮಿಟ್',
    buyNow: 'ಖರೀದಿಸಿ',
    sellNow: 'ಮಾರಿ',
    estimatedValue: 'ಅಂದಾಜು ಮೌಲ್ಯ',
    availableCash: 'ಲಭ್ಯವಿರುವ ನಗದು',
    watchlist: 'ವೋಚ್‌ಲಿಸ್ಟ್',
    pricePulse: 'ಬೆಲೆ ನಾಡಿ',
    portfolioSection: 'ಪೋರ್ಟ್ಫೋಲಿಯೊ',
    holdingsTitle: 'ಹೋಲ್ಡಿಂಗ್‌ಗಳು',
    symbol: 'ಚಿಹ್ನೆ',
    qty: 'ಪ್ರಮಾಣ',
    avgPrice: 'ಸರಾಸರಿ ಬೆಲೆ',
    ltp: 'LTP',
    value: 'ಮೌಲ್ಯ',
    pnl: 'P&L',
    profitLoss: 'ಲಾಭ / ನಷ್ಟ',
    donationTitle: 'ಶಿಕ್ಷೆ ಮತ್ತು ಆರೋಗ್ಯ ಬೆಂಬಲ',
    donateNow: 'ದಾನ ಮಾಡಿ',
    education: 'ಶಿಕ್ಷೆ',
    learningHub: 'ಕಲಿಕೆ ಕೇಂದ್ರ',
    toastTopup: '₹1,00,000 ವರ್ಚುವಲ್ ಅಕೌಂಟ್ಗೆ ಸೇರಿಸಲಾಗಿದೆ. ₹23 ಬೆಂಬಲ ಶುಲ್ಕವು ಶಿಕ್ಷಣ ಮತ್ತು ಆರೋಗ್ಯಕ್ಕೆ ಮೀಸಲಾಗಿರುತ್ತದೆ.',
    toastBuy: 'ಖರೀದಿ ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ.',
    toastSell: 'ಮಾರಾಟ ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ.',
    toastDonate: 'ಶಿಕ್ಷೆ ಮತ್ತು ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ದಾನ ದಾಖಲಾಗುತ್ತಿದೆ.',
    toastInsufficient: 'ಈ ಆರ್ಡರ್‌ಗೆ ಸಾಕಷ್ಟು ವರ್ಚುವಲ್ ಬ್ಯಾಲೆನ್ಸ್ ಇಲ್ಲ.',
    toastNoSell: 'ಮಾರಾಟಕ್ಕೆ ಸಾಕಷ್ಟು ಪ್ರಮಾಣವಿಲ್ಲ.'
  }
};

const state = {
  lang: 'en',
  cash: 300000,
  selectedAsset: 'RELIANCE',
  filter: 'all',
  showToastTimer: null,
  supportFee: 23,
  topupCount: 0,
  marketData: [...defaultMarketData],
  holdings: [
    { symbol: 'RELIANCE', qty: 25, avg: 2860 },
    { symbol: 'TCS', qty: 15, avg: 3350 },
    { symbol: 'BTC/USD', qty: 0.8, avg: 61000 },
    { symbol: 'NIFTY 50', qty: 7, avg: 24070 }
  ]
};

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function formatPrice(value) {
  return Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

function getAssetPrice(symbol) {
  const match = state.marketData.find(item => item.symbol === symbol);
  return match ? match.price : 0;
}

function getMarketDataByFilter() {
  if (state.filter === 'all') return state.marketData;
  return state.marketData.filter(item => item.type === state.filter);
}

function renderMarketCards() {
  const marketGrid = document.getElementById('marketGrid');
  const visible = getMarketDataByFilter();

  marketGrid.innerHTML = visible.map(item => {
    const isUp = item.change >= 0;
    const path = isUp
      ? 'M0 50 C25 20, 45 10, 70 30 S115 35, 160 14'
      : 'M0 8 C25 35, 50 38, 75 25 S120 15, 160 44';

    const priceText = item.symbol.includes('USD') || item.symbol.includes('NIFTY') || item.symbol.includes('NASDAQ') || item.symbol.includes('DOW') || item.symbol.includes('GOLD')
      ? formatPrice(item.price)
      : `₹${item.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

    return `
      <article class="market-card" data-symbol="${item.symbol}">
        <div class="market-top">
          <div>
            <div class="market-type">${item.type}</div>
            <h3>${item.symbol}</h3>
          </div>
          <span class="tag ${isUp ? 'success' : 'loss'}">${isUp ? '▲' : '▼'} ${Math.abs(item.change).toFixed(2)}%</span>
        </div>

        <svg class="sparkline" viewBox="0 0 160 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="${path}" fill="none" stroke="${isUp ? '#38d39f' : '#ff6f7d'}" stroke-width="3" stroke-linecap="round"></path>
        </svg>

        <div class="market-meta">
          <div>
            <div class="market-value">${priceText}</div>
          </div>
          <div class="change ${isUp ? 'up' : 'down'}">${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}%</div>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.market-card').forEach(card => {
    card.addEventListener('click', () => {
      const asset = card.dataset.symbol;
      state.selectedAsset = asset;
      document.getElementById('assetSelect').value = asset;
      updateOrderValue();
    });
  });
}

function renderWatchlist() {
  const watchlist = document.getElementById('watchlist');
  const data = state.marketData.slice(0, 5);
  watchlist.innerHTML = data.map(item => {
    const isUp = item.change >= 0;
    return `
      <div class="watchlist-item">
        <div class="watch-symbol">
          <strong>${item.symbol}</strong>
          <small class="muted">${item.type}</small>
        </div>
        <div class="watch-price">${formatPrice(item.price)}</div>
        <div class="change ${isUp ? 'up' : 'down'}">${isUp ? '+' : ''}${item.change.toFixed(2)}%</div>
      </div>
    `;
  }).join('');
}

function renderPortfolio() {
  const portfolioRows = document.getElementById('portfolioRows');
  const portfolioValue = document.getElementById('portfolioValue');
  const pnlValue = document.getElementById('pnlValue');
  const pnlTag = document.getElementById('pnlTag');
  const cashValue = document.getElementById('cashValue');
  const availableCash = document.getElementById('availableCash');

  let totalValue = 0;
  let unrealized = 0;

  portfolioRows.innerHTML = state.holdings.map(item => {
    const currentPrice = getAssetPrice(item.symbol);
    const value = currentPrice * item.qty;
    const difference = value - item.avg * item.qty;
    totalValue += value;
    unrealized += difference;

    return `
      <tr>
        <td>${item.symbol}</td>
        <td>${item.qty}</td>
        <td>${formatCurrency(item.avg)}</td>
        <td>${formatCurrency(currentPrice)}</td>
        <td>${formatCurrency(value)}</td>
        <td class="${difference >= 0 ? 'change up' : 'change down'}">${difference >= 0 ? '+' : '-'}${formatCurrency(Math.abs(difference))}</td>
      </tr>
    `;
  }).join('');

  const totalPortfolio = state.cash + totalValue;
  portfolioValue.textContent = formatCurrency(totalPortfolio);
  pnlValue.textContent = `${unrealized >= 0 ? '+' : '-'}${formatCurrency(Math.abs(unrealized))}`;
  pnlTag.textContent = `${unrealized >= 0 ? '+' : '-'}${formatCurrency(Math.abs(unrealized))}`;
  pnlTag.classList.toggle('success', unrealized >= 0);
  pnlTag.classList.toggle('loss', unrealized < 0);
  cashValue.textContent = formatCurrency(state.cash);
  availableCash.textContent = formatCurrency(state.cash);

  const change = ((unrealized / 300000) * 100).toFixed(2);
  document.getElementById('portfolioChange').textContent = `${change}% today`;
}

function renderLearn() {
  const learnGrid = document.getElementById('learnGrid');
  learnGrid.innerHTML = learnModules.map((item, index) => `
    <article class="learn-card">
      <span class="tag success">${index + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="learn-actions">
        <button class="ghost-btn audio-btn" data-message="${item.title}">${index === 0 ? 'Play Audio' : 'Listen'}</button>
        <button class="ghost-btn quiz-btn">${index === 2 ? 'Take Test' : 'Read'}</button>
      </div>
      <p class="muted" style="margin-top: 14px;">${item.duration}</p>
    </article>
  `).join('');

  document.querySelectorAll('.audio-btn').forEach(button => {
    button.addEventListener('click', () => {
      const message = button.dataset.message;
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(`${message}. This is a quick learning module for traders.`);
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
      }
      showToast('Audio lesson started for ' + message);
    });
  });

  document.querySelectorAll('.quiz-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
      const quiz = [
        'What is the main goal of paper trading?',
        'What should you use to manage risk?',
        'What does P&L mean in trading?'
      ];
      const text = quiz[index % quiz.length];
      showToast(text);
      if (window.confirm(`${text}\n\nA. Learn without risking money\nB. Buy only expensive stocks\nC. Ignore price changes\n\nChoose A to continue.`)) {
        showToast('Correct! Paper trading helps you learn without real financial risk.');
      } else {
        showToast('Review the education module and try again.');
      }
    });
  });
}

function renderAssetOptions() {
  const select = document.getElementById('assetSelect');
  select.innerHTML = state.marketData.map(item => `<option value="${item.symbol}">${item.symbol}</option>`).join('');
  select.value = state.selectedAsset;
}

function updateOrderValue() {
  const quantity = Number(document.getElementById('quantityInput').value || 1);
  const symbol = document.getElementById('assetSelect').value;
  const price = getAssetPrice(symbol);
  const total = price * quantity;
  document.getElementById('orderValue').textContent = formatCurrency(total);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(state.showToastTimer);
  state.showToastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function setLanguage(lang) {
  state.lang = lang;
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });
  document.title = `${dict.appName} | Zero Trade`;
}

function handleTrade(side) {
  const symbol = document.getElementById('assetSelect').value;
  const quantity = Number(document.getElementById('quantityInput').value || 1);
  const price = getAssetPrice(symbol);
  const total = price * quantity;

  if (side === 'buy') {
    if (state.cash < total) {
      showToast(translations[state.lang].toastInsufficient);
      return;
    }

    state.cash -= total;
    const existing = state.holdings.find(item => item.symbol === symbol);
    if (existing) {
      const prevQty = existing.qty;
      existing.qty += quantity;
      existing.avg = ((existing.avg * prevQty) + (price * quantity)) / existing.qty;
    } else {
      state.holdings.push({ symbol, qty: quantity, avg: price });
    }

    showToast(translations[state.lang].toastBuy);
  }

  if (side === 'sell') {
    const match = state.holdings.find(item => item.symbol === symbol);
    if (!match || match.qty < quantity) {
      showToast(translations[state.lang].toastNoSell);
      return;
    }

    state.cash += total;
    match.qty -= quantity;
    if (match.qty <= 0) {
      const index = state.holdings.findIndex(item => item.symbol === symbol);
      state.holdings.splice(index, 1);
    }
    showToast(translations[state.lang].toastSell);
  }

  renderPortfolio();
  updateOrderValue();
}

function topupBalance() {
  const virtualAmount = 100000;
  state.cash += virtualAmount;
  state.topupCount += 1;
  showToast(translations[state.lang].toastTopup);
  renderPortfolio();
}

function handleTabClick(event) {
  const filter = event.target.dataset.filter;
  state.filter = filter;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab === event.target));
  renderMarketCards();
}

async function fetchLiveCryptoData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin,ethereum&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    if (!response.ok) throw new Error('CoinGecko request failed');
    const data = await response.json();
    const coinMap = {
      'BTC/USD': data.find(item => item.id === 'bitcoin'),
      'ETH/USD': data.find(item => item.id === 'ethereum')
    };

    if (coinMap['BTC/USD']) {
      const btc = state.marketData.find(item => item.symbol === 'BTC/USD');
      if (btc) {
        btc.price = coinMap['BTC/USD'].current_price;
        btc.change = coinMap['BTC/USD'].price_change_percentage_24h || 0;
      }
    }

    if (coinMap['ETH/USD']) {
      const eth = state.marketData.find(item => item.symbol === 'ETH/USD');
      if (eth) {
        eth.price = coinMap['ETH/USD'].current_price;
        eth.change = coinMap['ETH/USD'].price_change_percentage_24h || 0;
      }
    }

    renderMarketCards();
    renderWatchlist();
    renderPortfolio();
  } catch (error) {
    console.warn('Live crypto fetch failed, using fallback market data.', error);
  }
}

function bindEvents() {
  document.getElementById('languageSelect').addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  document.getElementById('quantityInput').addEventListener('input', updateOrderValue);
  document.getElementById('assetSelect').addEventListener('change', updateOrderValue);
  document.getElementById('buyBtn').addEventListener('click', () => handleTrade('buy'));
  document.getElementById('sellBtn').addEventListener('click', () => handleTrade('sell'));
  document.getElementById('topupBtn').addEventListener('click', topupBalance);
  document.getElementById('donateBtn').addEventListener('click', () => showToast(translations[state.lang].toastDonate));

  document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', handleTabClick);
  });
}

function init() {
  renderAssetOptions();
  renderMarketCards();
  renderWatchlist();
  renderPortfolio();
  renderLearn();
  bindEvents();
  updateOrderValue();
  setLanguage('en');
  fetchLiveCryptoData();
  setInterval(() => {
    state.marketData = state.marketData.map(item => {
      if (item.type === 'crypto') {
        const delta = (Math.random() - 0.5) * item.price * 0.01;
        return {
          ...item,
          price: Number((item.price + delta).toFixed(2)),
          change: Number((item.change + (Math.random() - 0.5) * 0.8).toFixed(2))
        };
      }
      if (item.type === 'equity' || item.type === 'fno' || item.type === 'intraday' || item.type === 'global') {
        const delta = (Math.random() - 0.5) * item.price * 0.005;
        return {
          ...item,
          price: Number((item.price + delta).toFixed(2)),
          change: Number((item.change + (Math.random() - 0.5) * 0.6).toFixed(2))
        };
      }
      return item;
    });
    renderMarketCards();
    renderWatchlist();
    renderPortfolio();
  }, 3500);
}

init();

            