/* ================================================================
   VIONA GNB / LNB NAVIGATION
   - PC: 메가 메뉴, 세로형 드롭다운, 키보드 접근
   - Mobile: 슬라이드 메뉴, 단일 오픈 아코디언
   - Common: 고정 GNB, ESC 닫기, 외부 클릭 닫기
================================================================ */
(() => {
  'use strict';

  /* ---------- 자주 수정하는 기준값 ---------- */
  const MOBILE_BREAKPOINT = 768;
  const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

  /* ---------- 주요 요소 ---------- */
  const promotionBar = document.querySelector('.promotion-bar');
  const siteHeader = document.querySelector('#siteHeader');
  const gnbSticky = document.querySelector('.gnb-sticky');
  const menuItems = [...document.querySelectorAll('.gnb-item.has-menu')];
  const menuPanels = [...document.querySelectorAll('.desktop-panel')];
  const lnbCurrent = document.querySelector('.lnb a[aria-current="page"]');

  let openDesktopMenu = null;

  /* ---------- PC GNB 열기 / 닫기 ---------- */
  function positionDropdown(menuName) {
    const item = document.querySelector(`.gnb-item[data-menu="${menuName}"]`);
    const panel = document.querySelector(`.dropdown-panel[data-panel="${menuName}"]`);
    if (!item || !panel) return;

    const itemRect = item.getBoundingClientRect();
    panel.style.left = `${itemRect.left + itemRect.width / 2}px`;
  }

  function closeDesktopMenus(returnFocus = false) {
    const previousButton = openDesktopMenu?.querySelector('.gnb-button');

    menuItems.forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.gnb-button')?.setAttribute('aria-expanded', 'false');
    });
    menuPanels.forEach((panel) => {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
    });
    gnbSticky?.classList.remove('menu-open');
    openDesktopMenu = null;

    if (returnFocus) previousButton?.focus();
  }

  function openDesktopPanel(item) {
    if (!item || isMobile()) return;
    const menuName = item.dataset.menu;
    const panel = document.querySelector(`.desktop-panel[data-panel="${menuName}"]`);
    if (!panel) return;

    closeDesktopMenus();
    positionDropdown(menuName);
    item.classList.add('is-open');
    item.querySelector('.gnb-button')?.setAttribute('aria-expanded', 'true');
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    gnbSticky?.classList.add('menu-open');
    openDesktopMenu = item;
  }

  menuItems.forEach((item) => {
    const button = item.querySelector('.gnb-button');

    item.addEventListener('pointerenter', () => openDesktopPanel(item));
    button.addEventListener('focus', () => openDesktopPanel(item));
    button.addEventListener('click', () => {
      if (openDesktopMenu === item) closeDesktopMenus();
      else openDesktopPanel(item);
    });
  });

  /* 메뉴와 패널 영역에서 마우스가 완전히 벗어났을 때 닫기 */
  gnbSticky?.addEventListener('pointerleave', () => closeDesktopMenus());

  /* Tab 이동이 GNB/패널 바깥으로 나가면 닫기 */
  gnbSticky?.addEventListener('focusout', () => {
    window.setTimeout(() => {
      if (!gnbSticky.contains(document.activeElement)) closeDesktopMenus();
    }, 0);
  });

  document.addEventListener('pointerdown', (event) => {
    if (openDesktopMenu && !gnbSticky?.contains(event.target)) closeDesktopMenus();
  });

  /* ---------- 스크롤 시 프로모션 바는 사라지고 GNB만 고정 ---------- */
  function updateStickyGnb() {
    const threshold = promotionBar?.offsetHeight || 0;
    const shouldFix = window.scrollY >= threshold;
    gnbSticky?.classList.toggle('is-fixed', shouldFix);
    siteHeader?.classList.toggle('gnb-fixed', shouldFix);
  }

  window.addEventListener('scroll', updateStickyGnb, { passive: true });
  updateStickyGnb();

  /* ---------- 모바일 드로어 ---------- */
  const mobileOpenButton = document.querySelector('#mobileMenuOpen');
  const mobileCloseButton = document.querySelector('#mobileMenuClose');
  const mobileDrawer = document.querySelector('#mobileDrawer');
  const mobileOverlay = document.querySelector('#mobileOverlay');
  const accordions = [...document.querySelectorAll('.mobile-accordion')];
  let lastFocusedElement = null;

  function openMobileMenu() {
    if (!mobileDrawer || !mobileOverlay) return;
    closeDesktopMenus();
    lastFocusedElement = document.activeElement;
    mobileOverlay.hidden = false;
    document.body.classList.add('nav-locked');
    mobileOpenButton?.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      mobileOverlay.classList.add('is-visible');
      mobileDrawer.classList.add('is-open');
      mobileCloseButton?.focus();
    });
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileOverlay) return;
    mobileOverlay.classList.remove('is-visible');
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileOpenButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');

    window.setTimeout(() => { mobileOverlay.hidden = true; }, 260);
    lastFocusedElement?.focus();
  }

  mobileOpenButton?.addEventListener('click', openMobileMenu);
  mobileCloseButton?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  /* 모바일 아코디언: 하나를 열면 나머지는 자동으로 닫힘 */
  accordions.forEach((accordion) => {
    const button = accordion.querySelector(':scope > button');
    button?.addEventListener('click', () => {
      const willOpen = !accordion.classList.contains('is-open');

      accordions.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector(':scope > button')?.setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        accordion.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* 모바일 드로어 내부에 키보드 포커스 유지 */
  mobileDrawer?.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...mobileDrawer.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])')]
      .filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });

  /* ESC: 현재 열려 있는 모바일 또는 PC 메뉴 닫기 */
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (mobileDrawer?.classList.contains('is-open')) closeMobileMenu();
    else if (openDesktopMenu) closeDesktopMenus(true);
  });

  /* 모바일 검색 예시: 실제 검색 페이지 연결 전 새로고침 방지 */
  document.querySelector('.mobile-search')?.addEventListener('submit', (event) => event.preventDefault());

  /* 현재 LNB 탭을 모바일 화면 안으로 자동 정렬 */
  function revealCurrentLnb() {
    if (!isMobile() || !lnbCurrent) return;
    lnbCurrent.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  }

  /* 화면 변경 시 드롭다운 위치 재계산 및 모바일 메뉴 상태 정리 */
  window.addEventListener('resize', () => {
    if (openDesktopMenu) positionDropdown(openDesktopMenu.dataset.menu);
    if (!isMobile() && mobileDrawer?.classList.contains('is-open')) closeMobileMenu();
    revealCurrentLnb();
  });

  revealCurrentLnb();
})();
