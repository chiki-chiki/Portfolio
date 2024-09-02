// script.js (必要に応じて)
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // 下スクロール時、ナビゲーションバーを透過させる
    navbar.classList.add('scrolled-down');
    navbar.classList.remove('scrolled-up');
  } else {
    // 上スクロール時、ナビゲーションバーを再表示
    navbar.classList.add('scrolled-up');
    navbar.classList.remove('scrolled-down');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // モバイルやタブレット対応
});

document.querySelector('.menu-btn').addEventListener('click', function() {
  document.querySelector('.navlinks').classList.toggle('active');
});

document.querySelectorAll('.navlinks a').forEach(link=>{
  link.addEventListener('click', function() {
  document.querySelector('.navlinks').classList.remove('active');
});
});

document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector('.portrait');

  image.addEventListener('load', function() {
    image.classList.add('loaded');
  });

  // 画像がキャッシュされている場合にも対応
  if (image.complete) {
    image.classList.add('loaded');
  }
});

