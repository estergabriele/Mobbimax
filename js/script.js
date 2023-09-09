// Menu hamburguer

function mostrarMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/fechar.svg";
    }
}


// ScrollReveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.secaoHomeServicos', { duration: 1000 });

sr.reveal('.secaoHomeProdutos', { duration: 1000 });

sr.reveal('.responsivoServico', { duration: 1000 });

sr.reveal('.responsivoProdutos', { duration: 1000 });

sr.reveal('.responsivoLoja', { duration: 1000 });

sr.reveal('.quemSomosMetas', { duration: 1000 });

sr.reveal('.containerQuemSomos', { duration: 1000 });