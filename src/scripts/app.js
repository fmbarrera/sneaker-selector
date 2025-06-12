function getRandomSneaker() {
    const sneakers = [
        {
            name: "Nike Jordan 1s",
            image: "assets/Jordan 1 UNC Toe.jpeg"
        },
        {
            name: "Air Max 97",
            image: "assets/CDG-nike-air-max-97.jpg"
        },
        {
            name: "Jordan 4s",
            image: "assets/Jordan 4 Wet Cement.jpeg"
        }
    ];
    const randomIndex = Math.floor(Math.random() * sneakers.length);
    return sneakers[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById('select-sneaker');
    const sneakerDisplay = document.getElementById('sneaker-display');
    const sneakerImage = document.getElementById('sneaker-image');

    selectButton.addEventListener('click', () => {
        const selected = getRandomSneaker();
        sneakerDisplay.textContent = `Your selected sneaker: ${selected.name}`;
        sneakerImage.src = selected.image;
        sneakerImage.alt = selected.name;
        sneakerImage.style.display = 'block';
        sneakerDisplay.classList.add('sneaker');
    });
});