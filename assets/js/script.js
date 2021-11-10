var seconds = 1349;
var delay = 1389;

setTimeout(() => {
    document.querySelector('.botao--comprar').style.display = 'block';
    document.querySelector('.cartoes').style.display = 'flex';
}, seconds * 1000);

setTimeout(() => {
    document.querySelector('.sound').style.display = 'none';
}, delay * 1000)


window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        window.document.querySelector('.botao--subir').style.display = 'flex';
    } else {
        window.document.querySelector('.botao--subir').style.display = 'none';
    }
});


function subir() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 160) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)