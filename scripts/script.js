// script.js (必要に応じて)
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // 下スクロール時、ナビゲーションバーを透過させる
    navbar.style.backgroundColor = 'rgba(186, 186, 186, 0)'; // 透過度50%
  } else {
    // 上スクロール時、ナビゲーションバーを再表示
    navbar.style.backgroundColor = 'rgba(186, 186, 186, 0.5)'; // 透過なし
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // モバイルやタブレット対応
});

