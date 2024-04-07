let items = document.querySelectorAll(".description__item");
let length = items.length;
let arc = Math.PI * 2 / items.length;
let radius = 40;

for (let i = 0; i < length; i++) {

    let angle = i * arc;
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);

    
    items[i].style.position = 'absolute';
    items[i].style.left = 50 + x + '%';
    items[i].style.top = 50 + y + '%';
}


const swiper = new Swiper('.swiper', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

});


//модальное окно
jQuery(".open-modal-btn").click (function(e) {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

$(document).ready(function() {
  $(".modal__input").mask("+7(999) 999-9999");
})