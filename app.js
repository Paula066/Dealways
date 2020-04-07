const addForm = document.querySelector('.form');

const addElement = (e, node, txt, attribute, value) => {
    e.preventDefault();
    console.log('klik');

    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    element.appendChild(text);

    element.attribute


}
addForm.addEventListener('submit', addElement)