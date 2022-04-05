//funcionalidade de abrir e fechar o menu quando clica no icone 

const nav = document.querySelector('#header nav') //seleciona o header
const toggle = document.querySelectorAll("nav .toggle") //pega o menu e o close (ícones)

for (const element of toggle) {
    element.addEventListener("click", function(){
        nav.classList.toggle('show') //se tiver a class show mostra menu, se nao tiver mostra x
    })
}

//quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener("click", function(){
        nav.classList.remove('show')
    })
}

//mudar o header da pagina com sombrinha quando der scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){ //evento acontece na pagina quando usa scroll
    if(window.scrollY >= navHeight) {
        //scroll maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que altura do header
        header.classList.remove('scroll')
    }
})

/*Testimonial carousel slide swiper */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, /*quantidade de cards por pag. já tem pronto na biblioteca do Swiper. tem que ler a documentacao */
    pagination: { 
        el:'.swiper-pagination'
    },
    mousewheel: true, /*quando passa o mouse pode usar a rodinha no mouse*/
    keyboard: true, /*quando usa as setas do teclado, consegue passar*/
    breakpoints: {
        767: { /* quando for menor que isso */
            slidesPerView: 2,
            setWrapperSize: true 
        }
    }
});

/* ScrollReveal: Mostrar elementos quando der scroll na pag */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '700',
    reset: true /* quando chegar no final da pag que for voltando, faz novamente a animacao*/
})

scrollReveal.reveal(
    `#home .text, #home .image, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    {interval:100}
) /*quando rola primeiro aparece o texto depois a imagem em um intervalo de 100 */

/*botão para voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})


/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')

        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}
  