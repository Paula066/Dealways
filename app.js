const addElement = (e) => {
    e.preventDefault();
    console.log('klik');
}
const addForm = document.querySelector('.footer__container');
addForm.addEventListener('submit', addElement)