// Configuration
const CONFIG = {
    yourName: "CJ",
    herName: "Cate",
    messageTransitionDuration: 300, // in milliseconds
};

// Array of sweet messages
const SWEET_MESSAGES = [
    "You make every day brighter!",
    "Your smile is my favorite thing.",
    "You're truly one of a kind.",
    "Your butt is insane.",
    "I think you're the most beautiful girl in the WORLD.",
    "I appreciate everything you do.",
    "You inspire me to be better.",
    "Being with you is my favorite adventure.",
    "You're the sweetest thing in my life.",
];

// DOM Elements
const sweetMessageElement = document.getElementById('sweetMessage');
const newMessageBtn = document.getElementById('newMessageBtn');
const printBtn = document.getElementById('printBtn');
const backgroundPattern = document.querySelector('.background-pattern');

// Initialize background pattern
function initializeBackgroundPattern() {
    const pattern = `${CONFIG.yourName} & ${CONFIG.herName}`;
    backgroundPattern.setAttribute('data-names', pattern);
    
    // Create multiple instances of the pattern
    const gridSize = 5;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const patternElement = document.createElement('span');
        patternElement.textContent = pattern;
        backgroundPattern.appendChild(patternElement);
    }
}

// Create sparkles
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    if (!sparklesContainer) return;
    
    sparklesContainer.innerHTML = ''; // Clear existing sparkles
    const numberOfSparkles = 40;
    
    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
        sparklesContainer.appendChild(sparkle);
    }
}

// Create floating bubbles
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    if (!bubblesContainer) return;
    
    bubblesContainer.innerHTML = ''; // Clear existing bubbles
    const numberOfBubbles = 20;
    
    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.width = `${20 + Math.random() * 30}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = `${Math.random() * 8}s`;
        bubble.style.opacity = `${0.1 + Math.random() * 0.3}`;
        bubblesContainer.appendChild(bubble);
    }
}

// Create love birds
function createLoveBirds() {
    // Remove existing birds first
    document.querySelectorAll('.love-bird').forEach(bird => bird.remove());
    
    const numberOfBirds = 3;
    for (let i = 0; i < numberOfBirds; i++) {
        const bird = document.createElement('div');
        bird.className = 'love-bird';
        bird.textContent = '🕊️';
        bird.style.animationDelay = `${i * 5}s`;
        bird.style.top = `${20 + Math.random() * 30}%`;
        document.body.appendChild(bird);
    }
}

// Function to get random message (different from current)
function getRandomMessage(currentMessage) {
    let newMessage;
    do {
        newMessage = SWEET_MESSAGES[Math.floor(Math.random() * SWEET_MESSAGES.length)];
    } while (newMessage === currentMessage && SWEET_MESSAGES.length > 1);
    return newMessage;
}

// Function to update message with animation
function updateMessage() {
    const currentMessage = sweetMessageElement.textContent;
    const newMessage = getRandomMessage(currentMessage);
    
    // Add extra sparkles on message change
    createSparkles();
    
    // Fade out
    sweetMessageElement.style.opacity = '0';
    sweetMessageElement.style.transform = 'translateY(10px)';
    
    // Wait for fade out, then update and fade in
    setTimeout(() => {
        sweetMessageElement.textContent = newMessage;
        sweetMessageElement.style.opacity = '1';
        sweetMessageElement.style.transform = 'translateY(0)';
    }, CONFIG.messageTransitionDuration / 2);
}

// Print functionality
function handlePrint() {
    window.print();
}

// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
    heartsContainer.innerHTML = ''; // Clear existing hearts
    const numberOfHearts = 20;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * -20}s`;
        heart.style.animationDuration = `${6 + Math.random() * 4}s`;
        heart.style.opacity = `${0.3 + Math.random() * 0.2}`;
        heart.style.transform = `rotate(45deg) scale(${0.5 + Math.random() * 0.8})`;
        heartsContainer.appendChild(heart);
    }
}

// Refresh animations periodically
function refreshAnimations() {
    createFloatingHearts();
    createSparkles();
    createBubbles();
    createLoveBirds();
}

// Event Listeners
newMessageBtn.addEventListener('click', updateMessage);
printBtn.addEventListener('click', handlePrint);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeBackgroundPattern();
    refreshAnimations();
    
    // Set initial message immediately
    sweetMessageElement.textContent = getRandomMessage('');
    sweetMessageElement.style.opacity = '1';
    sweetMessageElement.style.transform = 'translateY(0)';
    
    // Add hover effects for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => createSparkles());
    });
});

// Periodically refresh animations to keep them looking fresh
setInterval(refreshAnimations, 20000);