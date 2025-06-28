// Contract address and links
const CONTRACT_ADDRESS = "GkjPY7nCFbduLknCtBfP7p8564XNZtnzVJ6CZpump";
const CHART_URL = "https://dexscreener.com/solana/" + CONTRACT_ADDRESS;
const BUY_URL = "https://jup.ag/swap/SOL-" + CONTRACT_ADDRESS;

// Portal entrance
document.getElementById('enterBtn').addEventListener('click', function() {
    const portalScreen = document.getElementById('portalScreen');
    const mainSite = document.getElementById('mainSite');
    
    // Add exit animation
    portalScreen.style.animation = 'portalExit 1s ease-in forwards';
    
    setTimeout(() => {
        portalScreen.classList.add('hidden');
        mainSite.classList.remove('hidden');
        startChaos();
    }, 1000);
});

// Start the chaos
function startChaos() {
    // Random glitch effects
    setInterval(() => {
        const elements = document.querySelectorAll('.glitch, .glitch-big');
        elements.forEach(el => {
            if (Math.random() < 0.1) {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = 'glitchEffect 0.5s ease-in-out';
            }
        });
    }, 2000);

    // Random color changes
    setInterval(() => {
        const colors = ['#ff0080', '#00ffff', '#ff6b35', '#4ecdc4', '#f7931e'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--random-color', randomColor);
    }, 3000);

    // Meme image chaos
    const memeImages = document.querySelectorAll('.meme-float');
    setInterval(() => {
        memeImages.forEach(img => {
            if (Math.random() < 0.3) {
                img.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`;
            }
        });
    }, 1500);
}

// Button actions
document.getElementById('buyBtn').addEventListener('click', function() {
    window.open(BUY_URL, '_blank');
    
    // Epic button effect
    this.style.animation = 'none';
    this.offsetHeight;
    this.style.animation = 'rainbowBg 0.5s ease-in-out, pulse 0.5s ease-in-out';
});

document.getElementById('chartBtn').addEventListener('click', function() {
    window.open(CHART_URL, '_blank');
});

document.getElementById('copyCABtn').addEventListener('click', function() {
    copyToClipboard(CONTRACT_ADDRESS);
    
    const originalText = this.textContent;
    this.textContent = 'COPIED!';
    this.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
    
    setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
    }, 2000);
});

// Copy contract address when clicked
document.getElementById('contractText').addEventListener('click', function() {
    copyToClipboard(CONTRACT_ADDRESS);
    
    this.style.color = '#4ecdc4';
    this.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        this.style.color = '';
        this.style.transform = '';
    }, 1000);
});

// Copy hero CA when clicked
document.getElementById('heroCA').addEventListener('click', function() {
    copyToClipboard(CONTRACT_ADDRESS);
    
    const container = this.parentElement;
    container.style.background = 'rgba(0, 255, 255, 0.3)';
    container.style.transform = 'scale(1.05)';
    
    // Show feedback
    const originalText = this.textContent;
    this.textContent = 'COPIED!';
    
    setTimeout(() => {
        this.textContent = originalText;
        container.style.background = '';
        container.style.transform = '';
    }, 2000);
});

// Copy function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copied to clipboard');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Random price updates
function updatePrice() {
    const priceElement = document.querySelector('.ticker-value');
    const basePrice = 999999999;
    const variation = Math.floor(Math.random() * 100000) - 50000;
    const newPrice = basePrice + variation;
    
    priceElement.textContent = `$${newPrice.toLocaleString()}`;
    priceElement.setAttribute('data-text', `$${newPrice.toLocaleString()}`);
}

setInterval(updatePrice, 5000);

// Epileptic warning (optional)
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 100);
    }
});

// Add portal exit animation
const style = document.createElement('style');
style.textContent = `
    @keyframes portalExit {
        0% { 
            transform: scale(1);
            opacity: 1;
        }
        50% { 
            transform: scale(1.5);
            opacity: 0.5;
        }
        100% { 
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    if (mouseTrail.length > 10) {
        mouseTrail.shift();
    }
    
    // Create trailing effect
    if (Math.random() < 0.3) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #00ffff, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            animation: trailFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
});

// Trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% { 
            opacity: 1;
            transform: scale(1);
        }
        100% { 
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Mouse Trail Effect
document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'mouse-trail';
    document.body.appendChild(trail);
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    setTimeout(() => {
        trail.remove();
    }, 800);
});

// Copy CA to clipboard
const copyCaBtn = document.getElementById('copyCABtn');
const contractAddress = document.getElementById('heroCA').innerText;

copyCaBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
        const originalText = copyCaBtn.innerText;
        copyCaBtn.innerText = 'COPIED!';
        setTimeout(() => {
            copyCaBtn.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Image Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.enlargeable-meme').forEach(img => {
    img.addEventListener('click', function() {
        modal.classList.add('show');
        modalImg.src = this.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
}); 