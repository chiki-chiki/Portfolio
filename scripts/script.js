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
//タイトルのフェードイン
window.addEventListener('load', () => {
  document.querySelector('#title').style.opacity = '1'; /* 透明度を1にする */
});


document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.portrait');

  const options = {
    threshold: 0.1 /* 10%がビューポートに見えたときに発火 */
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 一度発火したら監視を解除
      }
    });
  }, options);

  images.forEach(image => {
    observer.observe(image);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hobbies = document.querySelectorAll('.hobby');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 一度発火したら監視を解除
      }
    });
  }, options);

  hobbies.forEach(hobby => {
    observer.observe(hobby);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const works = document.querySelectorAll('.work');

  const options = {
    threshold: 0.1 /* 10%がビューポートに見えたときに発火 */
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 一度発火したら監視を解除
      }
    });
  }, options);

  works.forEach(work => {
    observer.observe(work);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const waterfallVModel = document.querySelector('.waterfall-V-model');
  const process_designs = document.querySelectorAll('.process-design');
  const process_tests = document.querySelectorAll('.process-test');
  
  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        process_designs.forEach(el=>el.classList.add('show'));
        process_tests.forEach(el=>el.classList.add('show'));
        observer.unobserve(entry.target); // 一度発火したら監視を解除
      }
    });
  }, options);

  observer.observe(waterfallVModel);

  
});

document.addEventListener('DOMContentLoaded', function() {
  const developExps = document.querySelectorAll('.develop-exp'); // すべての develop-exp 要素を取得

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 見えた develop-exp 要素にクラスを追加してフェードイン
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 対象が見えたら監視を解除
      }
    });
  }, options);

  // 各 develop-exp 要素に observer を適用
  developExps.forEach(exp => observer.observe(exp));
});

// モーダル開閉用のコード
const openButtons = document.querySelectorAll(".openModal");
const closeButtons = document.querySelectorAll(".close");

// モーダルを開く
openButtons.forEach(button => {
    button.onclick = function(event) {
        event.preventDefault();
        const modalId = button.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "block";
    };
});

// モーダルを閉じる
closeButtons.forEach(button => {
    button.onclick = function() {
        const modalId = button.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "none";
    };
});

// モーダルの外をクリックで閉じる
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

// スライドショー機能のコード
document.querySelectorAll('.modal').forEach(modal => {
    const slides = modal.querySelectorAll('.slide');
    const dots = modal.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // すべてのスライドとドットのクラスをリセット
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            // クリックされたスライドとドットに「active」クラスを追加
            slides[index].classList.add('active');
            dot.classList.add('active');
        });
    });
});
