const control = document.querySelector('.control');
const slider = document.querySelector('.slider');
const main = document.querySelector('.main');

let count = 1;

control.addEventListener('click',function() {
  if(count === 1) {
    slider.classList.add('go-out');
    main.style.paddingLeft = '0';
    this.innerHTML = '&#xe624;';
    this.classList.add('appear');
    this.classList.remove('hidden');
  } 
  else if (count === 2) {
    slider.classList.remove('go-out');
    main.style.paddingLeft = '160px';
    this.innerHTML = '&#xe622;';
    this.classList.remove('appear');
    this.classList.add('hidden');
  }
  count = 3 - count;
})