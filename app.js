const traningsButton = document.getElementById('trainings-button');
const showMore = () => {
    const check = traningsButton.classList.add('tranings__item-row--active');

}
traningsButton.addEventListener('click', showMore);