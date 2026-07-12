// 모바일 메뉴
const menuButton = document.querySelector('#menuBtn');
const mainNav = document.querySelector('#mainNav');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// 장바구니
let cartCount = 0;
const cartCountElement = document.querySelector('#cartCount');
const toast = document.querySelector('#toast');

document.querySelectorAll('.add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountElement.textContent = cartCount;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

// 찜하기
document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    button.textContent = button.classList.contains('active') ? '♥' : '♡';
  });
});

// 뉴스레터
document.querySelector('#newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = '구독 완료 ✓';
  event.currentTarget.reset();
});
