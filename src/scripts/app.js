let lastSneakerIndex = -1;

function getRandomSneaker() {
    const sneakers = [
        {
            name: "Nike Jordan 1s",
            image: "assets/Jordan 1 UNC Toe.jpeg",
            bgGradient: "linear-gradient(135deg, #7ba3e8 0%, #4169e1 100%)",
            emojis: Array(25).fill("🔥").concat(Array(5).fill("SNEAKER HEAD")).concat(Array(10).fill("👑"))
        },
        {
            name: "Air Max 97",
            image: "assets/CDG-nike-air-max-97.jpg",
            bgGradient: "linear-gradient(135deg,rgb(211, 229, 247) 0%,rgb(139, 183, 208) 100%)",
            emojis: Array(25).fill("🔥").concat(Array(5).fill("SNEAKER HEAD")).concat(Array(10).fill("👑"))
        },
        {
            name: "Jordan 4s",
            image: "assets/Jordan 4 Wet Cement.jpeg",
            bgGradient: "linear-gradient(135deg, #8c8c8c 0%, #404040 100%)",
            emojis: Array(25).fill("🔥").concat(Array(5).fill("SNEAKER HEAD")).concat(Array(10).fill("👑"))
        }
    ];

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * sneakers.length);
    } while (randomIndex === lastSneakerIndex && sneakers.length > 1);
    
    lastSneakerIndex = randomIndex;
    return sneakers[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById('select-sneaker');
    const sneakerDisplay = document.getElementById('sneaker-display');
    const sneakerImage = document.getElementById('sneaker-image');

    function createEmojiElement(emoji, startX, startY) {
        const element = document.createElement('div');
        element.textContent = emoji;
        element.className = 'floating-emoji';
        element.style.left = startX + 'px';
        element.style.top = startY + 'px';
        
        // More dynamic random direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = 400 + Math.random() * 200; // Increased distance
        const endX = startX + Math.cos(angle) * distance;
        const endY = startY + Math.sin(angle) * distance;
        
        // Random size for each emoji
        const scale = 0.5 + Math.random() * 1.5;
        element.style.setProperty('--scale', scale);
        
        element.style.setProperty('--end-x', `${endX}px`);
        element.style.setProperty('--end-y', `${endY}px`);
        
        return element;
    }

    function animateEmojis(emojis, centerX, centerY) {
        const container = document.querySelector('.emoji-container');
        container.innerHTML = '';
        
        // Create dispersed fire emojis
        for (let i = 0; i < 15; i++) {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const fireEmoji = createEmojiElement("🔥", randomX, randomY);
            container.appendChild(fireEmoji);
            setTimeout(() => fireEmoji.remove(), 2000 + Math.random() * 1000);
        }
        
        // Animate main emojis from button
        emojis.forEach(emoji => {
            const emojiElement = createEmojiElement(emoji, centerX, centerY);
            container.appendChild(emojiElement);
            
            // Remove emoji after animation
            setTimeout(() => {
                emojiElement.remove();
            }, 2000);
        });
    }

    selectButton.addEventListener('click', () => {
        const selected = getRandomSneaker();
        sneakerDisplay.textContent = `Your selected sneaker: ${selected.name}`;
        sneakerImage.src = selected.image;
        sneakerImage.alt = selected.name;
        sneakerImage.style.display = 'block';
        sneakerDisplay.classList.add('sneaker');
        
        // Change background gradient
        document.body.style.background = selected.bgGradient;
        
        // Animate emojis from center of button
        const buttonRect = selectButton.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        animateEmojis(selected.emojis, centerX, centerY);
    });
});