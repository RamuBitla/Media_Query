// BURGER

function navSlide() {
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}

navSlide();

// FAQ SECTION

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// function accSlide(){
//   const accordion = document.querySelector('.contentBx');
//   const label = document.querySelector('.label');
//   const content = document.querySelector('.content');

//   accordion.addEventListener('click', ()=>{
//     contentBx.classList.toggle('contentBx-active');

//     accordion.classList.toggle('toggle')

//   });
// }

// accSlide();
