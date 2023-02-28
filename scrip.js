let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
var btnopen = document.querySelector(".cart");
var modal = document.querySelector(".modal");
var btnclose = document.querySelector(".xmark");

// function toggleModal() {
//   modal.classList.add(".hide");
// }
// btnopen.addEventListener("click".toggleModal);

function openModal() {
  modal.classList.add("open-modal");
}
function closemodal() {
  modal.classList.remove("open-modal");
}
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

let plus_btns = document.querySelectorAll('.plus');
let minus_btns = document.querySelectorAll('.minus');
let qty_inputs = document.querySelectorAll('.num');

   plus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
           btn.previousElementSibling.value++;
       })
    })
    minus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
            btn.nextElementSibling.value = (btn.nextElementSibling.value == 0) ? 0 : btn.nextElementSibling.value - 1;
        })
    })

// ------- MODAL----------
