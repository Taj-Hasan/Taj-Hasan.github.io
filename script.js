// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Create falling wishes
    createFallingWishes();
    
    // Create confetti particles
    createConfetti();
    
    // Add sparkles throughout the page
    createSparkles();
    
    // Add hover effects to gift box
    const giftBox = document.querySelector('.gift-box');
    if (giftBox) {
        giftBox.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        giftBox.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Function to create falling wishes
function createFallingWishes() {
    const wishesContainer = document.querySelector('.falling-wishes-container');
    const wishes = [
        "Happy Birthday!",
        "Many Happy Returns!",
        "Best Wishes Shagufa!",
        "Have a Wonderful Day!",
        "Celebrate & Enjoy!",
        "Birthday Blessings!",
        "Shine Bright Today!",
        "Keep Smiling Always!",
        "Stay Blessed!",
        "Dream Big!",
        "✨ Birthday Magic ✨",
        "Be Happy Always!",
        "Love & Joy!",
        "Sparkle Like a Star!",
        "Sweet Celebrations!",
        "Party Time!",
        "You're Amazing!"
    ];
    
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    
    // Create wishes that fall from the top
    // Fewer wishes on mobile
    const wishCount = isMobile ? 8 : 30;
    
    for (let i = 0; i < wishCount; i++) {
        setTimeout(() => {
            const wish = document.createElement('div');
            wish.classList.add('falling-wish');
            
            // Random wish text
            const wishText = wishes[Math.floor(Math.random() * wishes.length)];
            wish.textContent = wishText;
            
            // Random positioning and styling
            const left = Math.random() * 100;
            const rotation = Math.random() * 30 - 15; // -15 to 15 degrees
            // Slower on mobile
            const duration = isMobile ? (Math.random() * 10 + 12) : (Math.random() * 8 + 8);
            const scale = Math.random() * 0.5 + 0.8; // 0.8-1.3 scale
            
            // Apply custom properties
            wish.style.setProperty('--rotation', `${rotation}deg`);
            wish.style.setProperty('--duration', `${duration}s`);
            
            // Position and size
            wish.style.left = `${left}%`;
            wish.style.top = '-100px';
            wish.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
            
            // Add to container
            wishesContainer.appendChild(wish);
            
            // Remove after animation completes
            setTimeout(() => {
                wish.remove();
            }, duration * 1000);
            
        }, i * (isMobile ? 2000 : 1000)); // Slower staggering on mobile
    }
    
    // Continue creating wishes at intervals - longer on mobile
    setInterval(() => createWishBatch(isMobile), isMobile ? 25000 : 15000);
}

function createWishBatch(isMobile = false) {
    const wishesContainer = document.querySelector('.falling-wishes-container');
    const wishes = [
        "Happy Birthday!",
        "Many Happy Returns!",
        "Best Wishes Shagufa!",
        "Have a Wonderful Day!",
        "Celebrate & Enjoy!",
        "Birthday Blessings!",
        "Shine Bright Today!",
        "Keep Smiling Always!",
        "Stay Blessed!",
        "Dream Big!",
        "✨ Birthday Magic ✨",
        "Be Happy Always!",
        "Love & Joy!",
        "Sparkle Like a Star!",
        "Sweet Celebrations!",
        "Party Time!",
        "You're Amazing!"
    ];
    
    // Create a batch of wishes - fewer on mobile
    const batchSize = isMobile ? 3 : 10;
    
    for (let i = 0; i < batchSize; i++) {
        setTimeout(() => {
            const wish = document.createElement('div');
            wish.classList.add('falling-wish');
            
            // Random wish text
            const wishText = wishes[Math.floor(Math.random() * wishes.length)];
            wish.textContent = wishText;
            
            // Random positioning and styling
            const left = Math.random() * 100;
            const rotation = Math.random() * 30 - 15; // -15 to 15 degrees
            // Slower on mobile
            const duration = isMobile ? (Math.random() * 10 + 12) : (Math.random() * 8 + 8);
            const scale = Math.random() * 0.5 + 0.8; // 0.8-1.3 scale
            
            // Apply custom properties
            wish.style.setProperty('--rotation', `${rotation}deg`);
            wish.style.setProperty('--duration', `${duration}s`);
            
            // Position and size
            wish.style.left = `${left}%`;
            wish.style.top = '-100px';
            wish.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
            
            // Add to container
            wishesContainer.appendChild(wish);
            
            // Remove after animation completes
            setTimeout(() => {
                wish.remove();
            }, duration * 1000);
            
        }, i * (isMobile ? 1500 : 800)); // Stagger more on mobile
    }
}

// Function to create confetti particles
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff4081', '#9c27b0', '#3f51b5', '#03a9f4', '#4caf50', '#ffeb3b', '#ff9800'];
    
    // Create 100 confetti particles
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random styling for each confetti
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 5;
        
        // Apply styling
        confetti.style.backgroundColor = randomColor;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${left}%`;
        confetti.style.top = '-10px';
        confetti.style.position = 'absolute';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Apply animation
        confetti.style.animation = `fall ${animationDuration}s ease-in infinite`;
        confetti.style.animationDelay = `${animationDelay}s`;
        
        // Add to container
        confettiContainer.appendChild(confetti);
    }
    
    // Add CSS keyframes for fall animation
    const styleSheet = document.styleSheets[0];
    const keyframes = `
    @keyframes fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight}px) rotate(360deg);
            opacity: 0;
        }
    }`;
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Function to create sparkles
function createSparkles() {
    const card = document.querySelector('.birthday-card');
    const sparkleCount = 30;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Random positioning
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Styling
        sparkle.style.position = 'absolute';
        sparkle.style.width = '8px';
        sparkle.style.height = '8px';
        sparkle.style.backgroundColor = 'transparent';
        sparkle.style.boxShadow = '0 0 5px 1px #fff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.opacity = '0';
        
        // Animation
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 10;
        sparkle.style.animation = `sparkle ${duration}s ease-in-out ${delay}s infinite`;
        
        // Add to card
        card.appendChild(sparkle);
    }
    
    // Add CSS keyframes for sparkle animation
    const styleSheet = document.styleSheets[0];
    const keyframes = `
    @keyframes sparkle {
        0%, 100% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }`;
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Add a floating hearts effect when the name is clicked
document.addEventListener('DOMContentLoaded', function() {
    const nameText = document.querySelector('.name-text');
    if (nameText) {
        nameText.addEventListener('click', createFloatingHearts);
    }
});


// Add a special cake slice animation when cake is clicked
document.addEventListener('DOMContentLoaded', function() {
    const cake = document.querySelector('.cake');
    if (cake) {
        cake.addEventListener('click', cakeAnimation);
    }
});

function cakeAnimation() {
    const cake = document.querySelector('.cake');
    
    // Add a little bounce animation
    cake.style.animation = 'cake-clicked 0.5s ease-in-out';
    
    // Create a small slice that appears to come out
    const slice = document.createElement('div');
    slice.classList.add('cake-slice');
    
    // Style the slice
    slice.style.position = 'absolute';
    slice.style.width = '30px';
    slice.style.height = '30px';
    slice.style.background = 'linear-gradient(135deg, #f6c, #fcf)';
    slice.style.clipPath = 'polygon(0 0, 100% 0, 50% 100%)';
    slice.style.bottom = '80px';
    slice.style.left = '70px';
    slice.style.zIndex = '10';
    
    // Add to cake container
    document.querySelector('.cake-container').appendChild(slice);
    
    // Animate the slice
    setTimeout(() => {
        slice.style.transition = 'all 0.8s ease-out';
        slice.style.transform = 'translateY(-50px) translateX(50px) rotate(45deg)';
        slice.style.opacity = '0';
    }, 10);
    
    // Remove after animation
    setTimeout(() => {
        slice.remove();
        // Reset cake animation to original
        cake.style.animation = 'cake-appear 1.5s ease-out forwards, cake-wiggle 5s ease-in-out 2s infinite';
    }, 800);
    
    // Add CSS keyframes for cake-clicked animation
    const styleSheet = document.styleSheets[0];
    const keyframes = `
    @keyframes cake-clicked {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }`;
    
    // Only add if it doesn't exist already
    let exists = false;
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].name === 'cake-clicked') {
            exists = true;
            break;
        }
    }
    
    if (!exists) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
}
