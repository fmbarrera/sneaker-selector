function getRandomSneaker() {
    const sneakers = ["Nike Jordan 1s", "Air Max 97", "Jordan 4s"];
    const randomIndex = Math.floor(Math.random() * sneakers.length);
    return sneakers[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById('select-sneaker');
    const sneakerDisplay = document.getElementById('sneaker-display');

    selectButton.addEventListener('click', () => {
        const selectedSneaker = getRandomSneaker();
        sneakerDisplay.textContent = `Your selected sneaker: ${selectedSneaker}`;
        sneakerDisplay.classList.add('sneaker');
    });
});