/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let ItemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length;i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(ItemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }
skillsHeader.forEach((a)=>{
    a.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
          tabsContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab =>{
    tab.addEventListener('click', function () {
        const target = document.querySelector(tab.dataset.target);
        tabsContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        } )
        target.classList.add('qualification__active')

        tab.forEach(tab => {
                tabs.classList.remove('qualification__active')
        })
        tabs.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns  = document.querySelectorAll('.services__button'),
          modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i )=>{
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose, i )=>{
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickkable: true,

    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween:48,


    pagination: {
        el: ".swiper-pagination",
        clickkable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 

/*==================== CURSOR ====================*/ 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 


/*==================== 3d model ====================*/ 
/* scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10;

renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(1280, 720);

renderer.domElement.setAttribute("id", "Minecraft3D0bj");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 1.2);
scene.add(aLight)

const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
pLight.position.set(0, -3, 7);
scene.add(pLight);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('../cybercar/scene.gltf', function(gLtf){
    obj = gltf;
    obj.scene.scale.set(1.3,1.3,1.3);

    scene.add(obj.scene);
}); */
