//每一个大标题栏
const titleBoxs = document.querySelectorAll('.title-box');
// 大标题栏下的h4标签
const h4 = document.querySelectorAll('.title-h4-icon');
// 大标题栏下的p标签
const titleTexts = document.querySelectorAll('.title-text');
// 右侧图片
const imgs = document.querySelectorAll('.imgs');

// 给每个大标题栏添加点击事件
for(let i = 0; i <= titleBoxs.length - 1; i++) {
  titleBoxs[i].addEventListener('click',function() {
    document.querySelector('.focus-box').classList.remove('focus-box');
    document.querySelector('.icon-xiasanjiao').classList.replace('icon-xiasanjiao','icon-yousanjiao');
    this.classList.add('focus-box');
    for(let j = 0; j <= titleTexts.length - 1; j++) {
      titleTexts[j].style.display = 'none';
    }
    h4[i].classList.replace('icon-yousanjiao','icon-xiasanjiao');
    titleTexts[i].style.display = 'block';
    document.querySelector('.focus-img').classList.remove('focus-img');
    imgs[i].classList.add('focus-img');
  })
}