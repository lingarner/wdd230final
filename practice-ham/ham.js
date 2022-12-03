const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;


// console.log("hi");

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('nav').style.display = 'block';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('nav').style.display = 'none';
  }
});
