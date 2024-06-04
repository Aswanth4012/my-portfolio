/* --- navbar --- */
window.addEventListener('scroll', function(){
    const navigation_bar = this.document.querySelector('.header');
    navigation_bar.classList.toggle('sticky', window.scrollY > 0);
});


/** --Theme Button -- **/
const themeButton = document.querySelector(".theme-btn");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeButton.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
}); 

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeButton.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


/* -- service section modal */
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalColseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalColseBtns.forEach((modalColseBtn) => {
    modalColseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

/* --- Portfolio Section -- */

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioColseBtns = document.querySelectorAll(".portfolio-close-btn");

var PortfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        PortfolioModal(i);
    });
});

portfolioColseBtns.forEach((portfolioColseBtn) => {
    portfolioColseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

/* --Our Clients Swipper -- */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

  /* --Navigation menu active on scrolling --  */
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-links a[href*=" + id + "]").classList.add("active");
        }else{
            document.querySelector(".nav-links a[href*=" + id + "]").classList.remove("active");
        }
    });
  });

  /* ---Responsive Navigation Menu */
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const menu = document.querySelector(".navigation");
  const navItems = document.querySelectorAll(".nav-links a")

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  navItems.forEach((navitem) => {
    navitem.addEventListener("click", () => {
        menu.classList.remove("active");
    });
  });

/* ---Reveal Animation--- */
ScrollReveal({
    //reset: true,
    distance: '20px',   //60px default
    duration: 2500,
    delay: 100
});

/* ---target elements--- */
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.social-media i, .contact-left li', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'rright'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .mySwiper, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay: 800, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval:200});