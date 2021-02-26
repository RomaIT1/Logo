//Vue js для меню бургера---------------------------------------------------------------------------
App = {
   data(){
      return {
         burgerLeft: '-100%',
         burgerStatus: 'close',
         headerBackground: 'none'
      }
   },
   methods: {
      openMenu(){
         if (this.burgerStatus === 'close'){
            this.burgerLeft = '0px'
            this.burgerStatus = open
            this.headerBackground = 'rgba(0, 0, 0, 0.8)'
         }
         else {
            this.burgerLeft = '-100%'
            this.burgerStatus = 'close'
            this.headerBackground = 'none'
         }
      }
   }
}
Vue.createApp(App).mount('#app');

//Для фиксированной шапки---------------------------------------------------------------------------
const headerFix = document.querySelector('.header-main');
const header = document.querySelector('.header')
const welcomePage = document.querySelector('.welcome-page__welcome');
let heightHeader;
//Для прогресс-скролла---------------------------------------------------------------------------
const wrapper = document.querySelector('.wrapper');
const scrollProgress = document.querySelector('.header-main__progress');
let scrollRelative;
let heightWrapper
//Анимация---------------------------------------------------------------------------
//Анимируемый элемент
const animalElement = document.querySelectorAll('.animal')
//Точка топрикосновения элемента
let scrollPointElement

//Функция анимации
function animal(delay) {
    for (let i of animalElement){
        scrollPointElement = i.getBoundingClientRect().y - document.body.clientHeight + delay
    
        if (scrollPointElement <= 0){
            i.classList.remove('visible')
        }
        else{
            i.classList.add('visible')
        }
    } 
}
//Событие скролла---------------------------------------------------------------------------
window.addEventListener('scroll', function() {
   animal(100)
   if (pageYOffset > header.clientHeight){
      heightHeader = headerFix.clientHeight
      headerFix.style.position = 'fixed'
      welcomePage.style.paddingTop = heightHeader + 'px'

      headerFix.style.background = 'rgba(0, 0, 0, 0.8)'

      heightWrapper = wrapper.clientHeight - document.documentElement.clientHeight;
      scrollProgress.style.display = 'block'
      scrollRelative = pageYOffset / heightWrapper * 100
      scrollProgress.style.width = scrollRelative + '%'
   } else{
      headerFix.style.position = 'relative'
      welcomePage.style.paddingTop = 0 + 'px'

      headerFix.style.background = 'none'
      scrollProgress.style.display = 'none'
   }
});
//Слайдеры---------------------------------------------------------------------------
new Swiper('.portfolio__slider-container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
});
new Swiper('.reviews__slider-container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
});
