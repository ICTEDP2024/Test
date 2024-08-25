function handleButtonClick(event) {
    const clickedButton = event.target;
    const group = clickedButton.dataset.group;

    const groupButtons = document.querySelectorAll(`.btn[data-group="${group}"]`);

    groupButtons.forEach(button => button.classList.remove('checked'));

    clickedButton.classList.add('checked');
}

document.querySelectorAll('.btn').forEach(button => button.addEventListener('click', handleButtonClick));
