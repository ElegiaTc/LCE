// const titleCards = document.querySelector('.title-cards');
const titleBoxs = document.querySelectorAll('.title-box');
const titleTexts = document.querySelectorAll('.title-text');
const imgs = document.querySelectorAll('.imgs');

for(let i = 0; i <= titleBoxs.length - 1; i++) {
  titleBoxs[i].addEventListener('click',function() {
    document.querySelector('.focus-box').classList.remove('focus-box');
    this.classList.add('focus-box');
    for(let j = 0; j <= titleTexts.length - 1; j++) {
      titleTexts[j].style.display = 'none';
    }
    titleTexts[i].style.display = 'block';
    document.querySelector('.focus-img').classList.remove('focus-img');
    imgs[i].classList.add('focus-img');
  })
}