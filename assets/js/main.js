const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

//미디어 쿼리 적용 시 nav Toggle show
if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// nav 클릭시 활성화 디자인
const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))

// header scroll 이벤트
function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader )

//QUESTIONS SECTION - accordion 활성화 

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')
    // console.log(accordionItems)

    accordionHeader.addEventListener('click',() =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !==item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

// ACTIVE LINK(nav) 활성화

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 400 ,
              sectionId = current.getAttribute('id')

            //   console.log(sectionHeight,sectionTop, sectionId, scrollY)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//scroll_icon 보이기
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
   const a =  document.body.classList.toggle(darkTheme)
   
   if(a){
    document.querySelector('.fa-moon').classList.replace('fa-moon','fa-sun')
   }else {
    document.querySelector('.fa-sun').classList.replace('fa-sun','fa-moon')
   }


})
// scroll reveal. js

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})