/* FITTORY 메인 콘텐츠 인터랙션 */
(() => {
  'use strict';

  // 장바구니 담기
  let cartCount = 0;
  const cartCountElement = document.querySelector('#cartCount');
  const cartLink = document.querySelector('.cart-link');
  const toast = document.querySelector('#toast');

  document.querySelectorAll('.add-cart').forEach((button) => {
    button.addEventListener('click', () => {
      cartCount += 1;
      if (cartCountElement) cartCountElement.textContent = String(cartCount);
      cartLink?.setAttribute('aria-label', `장바구니, 상품 ${cartCount}개`);
      toast?.classList.add('show');
      window.setTimeout(() => toast?.classList.remove('show'), 1800);
    });
  });

  // 상품 찜하기
  document.querySelectorAll('.heart').forEach((button) => {
    button.addEventListener('click', () => {
      const isActive = button.classList.toggle('active');
      button.textContent = isActive ? '♥' : '♡';
      button.setAttribute('aria-pressed', String(isActive));
    });
  });

  // 뉴스레터 구독 예시
  document.querySelector('#newsletterForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    if (button) button.textContent = '구독 완료 ✓';
    event.currentTarget.reset();
  });
})();
