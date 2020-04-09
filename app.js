const headbar = document.querySelector('.headbar');
const headbarContainer = document.querySelector('.headbar > .container')
window.addEventListener('scroll', () => {
    const headbarTop = headbar.getBoundingClientRect().top;
    if (headbarTop !== -44) {
        headbarContainer.classList.remove('full', 'shadow')
    } else {
        headbarContainer.classList.add('full', 'shadow')

    }
    console.log({ headbarContainer })
})