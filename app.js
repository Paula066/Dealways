'use script'
const headbar = document.querySelector('.headbar');
const headbarContainer = document.querySelector('.headbar > .container')
window.addEventListener('scroll', () => {
    const headbarTop = headbar.getBoundingClientRect().top;
    if (headbarTop !== -44) {
        headbarContainer.classList.remove('full', 'shadow')
    } else {
        headbarContainer.classList.add('full', 'shadow')
    }
    if (headbarTop !== -50 && headbarTop !== -44) {
        headbarContainer.classList.remove('full', 'shadow')
    } else {
        headbarContainer.classList.add('full', 'shadow')
    }

})

const btnMoreTranings = document.getElementById('trainings-button');
const traningRow = document.querySelectorAll('.tranings__item-row.hide');


const showMoreTranings = () => {
    traningRow.forEach((e) => {
        e.classList.remove('hide');
    })
    btnMoreTranings.style.display = "none";
}

btnMoreTranings.addEventListener('click', showMoreTranings);

// const elementContact = document.querySelector('.list__text');
const test = document.querySelector('.specialize');
// const nav = document.querySelectorAll('.list');


// const scrollView = (e, element) => {
//     e.preventDefault();
//     element.scrollIntoView({ behavior: "smooth" });

// }



// elementContact.addEventListener('click', function(e) {
//     const test = document.querySelector('.specialize');
//     scrollView(e, test);
// });

const elementContact = document.querySelectorAll('.list__text');



// elementContact.forEach((e) => {
//     e.addEventListener('click', (event) => {

//         event.preventDefault();
//         test.scrollIntoView();
//     })
// })

const goto = function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const handler = document.querySelector(href);
    history.replaceState(null, document.title, href)
    handler.scrollIntoView({ behavior: 'smooth' })
}

document.querySelectorAll('.goto').forEach(item => {
    item.addEventListener('click', goto)
})

const burger = document.querySelector('.headbar__burger');
const navMobile = document.querySelector('nav.mobile');
const icons = document.querySelectorAll('.fas');

const showMenu = () => {
    icons.forEach((e) => {
        e.classList.toggle('off');
    })
    navMobile.classList.toggle('show');
}

burger.addEventListener('click', showMenu)