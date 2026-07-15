/* ================================================================
   VIONA 공통 서브페이지 렌더러
   각 HTML의 body[data-section] 값에 따라 콘텐츠와 LNB를 구성합니다.
================================================================ */
(() => {
  'use strict';

  const pages = {
    shop: {
      label: 'VIONA SHOP', title: '내 몸에 맞는 건강을\n더 쉽게 선택하세요.',
      description: '건강 목표와 라이프스타일에 맞춰 엄선한 VIONA의 데일리 웰니스 제품을 만나보세요.',
      image: 'img/hero.jpg', introLabel: 'SMART WELLNESS CHOICE', introTitle: '필요한 영양을 정확하게,\n매일의 루틴은 간편하게',
      intro: '원료의 출처부터 배합 기준, 섭취 편의성까지 꼼꼼하게 검토했습니다. 오늘의 건강 고민에 맞는 제품을 선택하고 꾸준한 변화를 시작해보세요.',
      points: [['100%','원료 정보 공개'],['3 STEP','품질 검증'],['DAILY','간편한 섭취']],
      lnb: [['전체 상품','all'],['체중 관리','weight'],['장 건강','gut'],['면역 관리','immune'],['활력·에너지','energy'],['베스트','best'],['신상품','new']],
      cards: [
        {id:'all',tag:'BEST 01',title:'데일리 밸런스 멀티팩',text:'하루 한 포로 채우는 7가지 필수 영양',sale:'20%',price:'32,800원',old:'41,000원',tone:''},
        {id:'gut',tag:'BEST 02',title:'그린 바이옴 프로바이오틱스',text:'100억 유산균으로 시작하는 편안한 장 루틴',sale:'15%',price:'28,900원',old:'34,000원',tone:'alt'},
        {id:'energy',tag:'BEST 03',title:'에너지 부스터 비타민 B',text:'바쁜 일상에 필요한 활력 에너지 충전',sale:'15%',price:'24,600원',old:'29,000원',tone:'warm'},
        {id:'immune',tag:'NEW',title:'데일리 이뮨 밸런스',text:'정상적인 면역 기능을 위한 하루 한 캡슐',sale:'10%',price:'29,700원',old:'33,000원',tone:'alt'},
        {id:'weight',tag:'ROUTINE',title:'슬림 밸런스 가르시니아',text:'식사와 함께 관리하는 가벼운 체중 루틴',sale:'18%',price:'26,200원',old:'32,000원',tone:'warm'},
        {id:'new',tag:'NEW',title:'순수 초임계 알티지 오메가3',text:'혈행과 눈 건강을 한 번에 관리하세요',sale:'15%',price:'35,700원',old:'42,000원',tone:''}
      ]
    },
    routine: {
      label:'DAILY WELLNESS ROUTINE', title:'작은 습관이 만드는\n건강한 하루의 변화',
      description:'무리한 계획보다 매일 실천할 수 있는 나만의 건강 루틴을 VIONA와 함께 설계하세요.',
      image:'img/routine-morning.jpg', introLabel:'YOUR ROUTINE GUIDE', introTitle:'몸과 생활 리듬을 이해하는\n맞춤 건강 루틴',
      intro:'현재의 생활 패턴과 건강 목표를 먼저 살펴보고, 아침부터 잠들기 전까지 부담 없이 이어갈 수 있는 건강 습관을 제안합니다.',
      points:[['01','목표 확인'],['02','루틴 설계'],['03','꾸준한 기록']],
      lnb:[['맞춤 건강 루틴','custom'],['건강 목표 진단','check'],['아침 건강 루틴','morning'],['운동 전후 루틴','workout'],['직장인 건강 루틴','office']],
      cards:[
        {id:'custom',tag:'PERSONAL',title:'나에게 맞는 건강 루틴',text:'생활 패턴과 목표를 바탕으로 지속 가능한 루틴을 설계합니다.'},
        {id:'check',tag:'CHECK UP',title:'3분 건강 목표 진단',text:'간단한 질문에 답하고 지금 가장 필요한 건강 관리를 확인하세요.'},
        {id:'morning',tag:'MORNING',title:'몸을 깨우는 아침 루틴',text:'수분 섭취와 스트레칭, 영양 섭취로 산뜻하게 시작하세요.'},
        {id:'workout',tag:'WORKOUT',title:'운동 전후 영양 루틴',text:'운동 효과와 회복을 고려한 섭취 타이밍을 안내합니다.'},
        {id:'office',tag:'OFFICE',title:'직장인의 데일리 루틴',text:'오래 앉아 있는 하루에도 실천할 수 있는 작은 습관입니다.'}
      ]
    },
    magazine: {
      label:'VIONA JOURNAL', title:'알면 더 쉬워지는\n건강한 생활의 기준',
      description:'복잡한 건강 정보를 일상에서 바로 실천할 수 있도록 쉽고 정확하게 전합니다.',
      image:'img/magazine.jpg', introLabel:'WELLNESS INSIGHT', introTitle:'좋은 정보가\n좋은 습관을 만듭니다',
      intro:'유행하는 정보보다 신뢰할 수 있는 기준을 먼저 살핍니다. 영양과 생활 습관, 체중 관리와 올바른 섭취 방법을 차분하게 소개합니다.',
      points:[['WEEKLY','새로운 콘텐츠'],['EASY','쉬운 설명'],['TRUST','검증된 기준']],
      lnb:[['전체 콘텐츠','all'],['영양 정보','nutrition'],['생활 습관','habit'],['체중 관리','diet'],['섭취 가이드','guide']],
      cards:[
        {id:'all',tag:'WELLNESS',title:'장 건강을 위한 생활 습관 5가지',text:'매일 반복되는 작은 습관이 장 건강을 바꾸는 이유를 알아봅니다.'},
        {id:'nutrition',tag:'NUTRITION',title:'면역력을 위한 식단 가이드',text:'계절이 바뀔 때 놓치지 말아야 할 필수 영양소를 소개합니다.'},
        {id:'habit',tag:'LIFESTYLE',title:'오후의 피로를 줄이는 방법',text:'업무 중에도 쉽게 실천할 수 있는 회복 습관을 확인하세요.'},
        {id:'diet',tag:'DIET',title:'다이어트가 자꾸 실패하는 이유',text:'의지가 아닌 환경과 루틴의 관점에서 체중 관리를 살펴봅니다.'},
        {id:'guide',tag:'GUIDE',title:'영양제는 언제 먹어야 할까?',text:'영양소별 특징을 고려한 섭취 시간과 조합을 안내합니다.'}
      ]
    },
    recipe: {
      label:'HEALTHY RECIPE', title:'맛있게 채우는\n가벼운 건강 한 끼',
      description:'구하기 쉬운 재료와 간단한 조리법으로 매일 즐길 수 있는 건강 레시피를 제안합니다.',
      image:'img/recipe-salad.jpg', introLabel:'EASY & BALANCED', introTitle:'영양의 균형과 맛을\n모두 놓치지 않도록',
      intro:'거창한 재료나 복잡한 조리 과정 없이도 충분합니다. 단백질과 채소, 건강한 탄수화물을 균형 있게 담은 한 끼를 완성해보세요.',
      points:[['15 MIN','간편 조리'],['BALANCE','균형 영양'],['DELICIOUS','즐거운 맛']],
      lnb:[['전체 레시피','all'],['다이어트 레시피','diet'],['고단백 레시피','protein'],['간편식','easy'],['건강 음료','drink']],
      cards:[
        {id:'all',tag:'15 MIN · 320 kcal',title:'허브 닭가슴살 샐러드',text:'신선한 채소와 담백한 단백질을 한 그릇에 담았습니다.'},
        {id:'diet',tag:'10 MIN · 290 kcal',title:'프루트 오트밀 브런치',text:'포만감은 오래 유지하고 부담은 가볍게 줄인 아침 메뉴입니다.'},
        {id:'protein',tag:'20 MIN · 410 kcal',title:'두부 현미 단백질 볼',text:'식물성 단백질과 건강한 탄수화물의 든든한 조합입니다.'},
        {id:'easy',tag:'5 MIN · 240 kcal',title:'베리 그릭요거트 볼',text:'바쁜 아침에도 빠르게 완성하는 산뜻한 간편식입니다.'},
        {id:'drink',tag:'5 MIN · 180 kcal',title:'그린 단백질 쉐이크',text:'채소와 과일, 단백질을 부드럽게 블렌딩한 건강 음료입니다.'}
      ]
    },
    event: {
      label:'VIONA BENEFIT', title:'건강한 시작에\n즐거운 혜택을 더하세요.',
      description:'신규회원 혜택부터 꾸준한 실천을 돕는 건강 챌린지까지 VIONA의 이벤트를 만나보세요.',
      image:'img/routine-workout.jpg', introLabel:'THIS MONTH', introTitle:'이번 달 VIONA가 준비한\n특별한 건강 혜택',
      intro:'더 쉽게 시작하고 오래 이어갈 수 있도록 쇼핑 혜택과 참여형 프로그램을 함께 준비했습니다.',
      points:[['10%','신규회원 할인'],['7 DAYS','건강 챌린지'],['FREE','5만원 이상 배송']],
      lnb:[['진행 중인 이벤트','ongoing'],['건강 챌린지','challenge'],['신규회원 혜택','welcome'],['종료된 이벤트','ended']],
      cards:[
        {id:'ongoing',tag:'ONGOING',title:'여름맞이 데일리 루틴 기획전',text:'목표별 베스트 제품을 특별한 구성과 가격으로 만나보세요.'},
        {id:'challenge',tag:'7 DAYS',title:'7일 건강 루틴 챌린지',text:'매일 작은 습관을 인증하고 완주 선물을 받아보세요.'},
        {id:'welcome',tag:'WELCOME',title:'신규회원 10% 할인',text:'가입 즉시 사용할 수 있는 첫 구매 쿠폰을 드립니다.'},
        {id:'ended',tag:'ARCHIVE',title:'지난 이벤트 모아보기',text:'종료된 프로모션과 챌린지 결과를 확인할 수 있습니다.'}
      ]
    },
    brand: {
      label:'VIONA BRAND STORY', title:'Healthy Routine,\nBetter Everyday.',
      description:'좋은 제품과 올바른 정보로 누구나 지속 가능한 건강 습관을 만들도록 돕습니다.',
      image:'img/brand.jpg', introLabel:'OUR PHILOSOPHY', introTitle:'건강은 특별한 계획이 아니라\n일상이 되어야 합니다.',
      intro:'VIONA는 자연에서 얻은 건강한 원료와 신뢰할 수 있는 제품, 그리고 일상에서 지속할 수 있는 건강 습관을 함께 제안하는 라이프스타일 웰니스 브랜드입니다.',
      points:[['HONEST','투명한 정보'],['TRUST','신뢰할 수 있는 제품'],['DAILY','지속 가능한 습관']],
      lnb:[['VIONA 소개','about'],['브랜드 철학','philosophy'],['제품 선정 기준','standard'],['지속가능성','sustainability']],
      cards:[
        {id:'about',tag:'ABOUT VIONA',title:'건강한 일상을 위한 동반자',text:'제품 판매를 넘어 더 나은 건강 선택과 꾸준한 실천을 돕습니다.'},
        {id:'philosophy',tag:'PHILOSOPHY',title:'작은 습관의 힘을 믿습니다',text:'완벽한 하루보다 매일 반복할 수 있는 한 번의 선택을 중요하게 생각합니다.'},
        {id:'standard',tag:'OUR STANDARD',title:'깐깐하게 고르는 제품 기준',text:'원료, 배합, 안전성, 섭취 편의성을 종합적으로 검토합니다.'},
        {id:'sustainability',tag:'SUSTAINABILITY',title:'건강한 내일을 위한 책임',text:'환경을 고려한 포장과 책임 있는 생산 방식을 꾸준히 확대합니다.'}
      ]
    }
  };

  const section = document.body.dataset.section || 'shop';
  const page = pages[section] || pages.shop;
  const fileMap = {shop:'shop.html',routine:'routine.html',magazine:'magazine.html',recipe:'recipe.html',event:'event.html',brand:'brand.html'};
  const labelMap = {shop:'SHOP',routine:'ROUTINE',magazine:'MAGAZINE',recipe:'RECIPE',event:'EVENT',brand:'BRAND'};

  const navigationLinks = Object.keys(fileMap).map(key => `<li class="gnb-item ${key === section ? 'active' : ''}"><a class="gnb-button" href="${fileMap[key]}" ${key === section ? 'aria-current="page"' : ''}>${labelMap[key]}</a></li>`).join('');
  const mobileLinks = Object.keys(fileMap).map(key => `<a class="${key === section ? 'active' : ''}" href="${fileMap[key]}" ${key === section ? 'aria-current="page"' : ''}>${labelMap[key]}<span>→</span></a>`).join('');
  const lnb = page.lnb.map((item,index) => `<a class="${index === 0 ? 'active' : ''}" href="#${item[1]}" ${index === 0 ? 'aria-current="page"' : ''}>${item[0]}</a>`).join('');

  document.querySelector('#sharedHeader').innerHTML = `
    <div class="promotion-bar">신규회원 가입 시 10% 할인 · 5만원 이상 무료배송</div>
    <header class="site-header" id="siteHeader"><div class="gnb-sticky"><div class="gnb-shell"><div class="gnb-inner">
      <button class="mobile-menu-open" id="mobileMenuOpen" type="button" aria-label="전체 메뉴 열기" aria-controls="mobileDrawer" aria-expanded="false"><span></span><span></span><span></span></button>
      <a class="site-logo" href="index.html" aria-label="VIONA 홈">VIONA<span aria-hidden="true">●</span></a>
      <nav class="desktop-gnb" aria-label="주요 메뉴"><ul class="gnb-list">${navigationLinks}</ul></nav>
      <div class="gnb-utils"><a class="utility-link search-link" href="#" aria-label="검색"><span class="line-icon icon-search"></span></a><a class="utility-link account-link" href="#" aria-label="마이페이지"><span class="line-icon icon-user"></span></a><a class="utility-link cart-link" href="#" aria-label="장바구니, 상품 0개"><span class="line-icon icon-cart"></span><b class="cart-badge">0</b></a></div>
    </div></div></div><nav class="lnb" aria-label="${labelMap[section]} 하위 메뉴"><div class="lnb-inner" id="lnbScroll">${lnb}</div></nav></header>
    <div class="mobile-overlay" id="mobileOverlay" hidden></div><aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true" aria-label="모바일 전체 메뉴"><div class="drawer-head"><a class="site-logo" href="index.html">VIONA<span>●</span></a><button class="drawer-close" id="mobileMenuClose" type="button" aria-label="전체 메뉴 닫기">×</button></div><form class="mobile-search" role="search"><label class="sr-only" for="mobileSearch">검색어</label><input id="mobileSearch" type="search" placeholder="무엇을 찾고 계신가요?"><button type="submit" aria-label="검색"><span class="line-icon icon-search"></span></button></form><nav class="mobile-page-links" aria-label="모바일 주요 메뉴">${mobileLinks}</nav><nav class="mobile-support" aria-label="고객 메뉴"><a href="#">로그인</a><a href="#">주문·배송 조회</a><a href="#">찜한 상품</a><a href="#">고객센터</a></nav></aside>`;

  const points = page.points.map(point => `<div><b>${point[0]}</b><span>${point[1]}</span></div>`).join('');
  const cards = page.cards.map((card,index) => section === 'shop' ? `
    <article class="sub-card sub-product" id="${card.id}"><div class="sub-product-visual ${card.tone}"><div class="sub-product-bottle">VIONA</div></div><div class="sub-product-body"><span class="sub-card-tag">${card.tag}</span><h3>${card.title}</h3><p>${card.text}</p><div class="sub-price"><b>${card.sale}</b><strong>${card.price}</strong><del>${card.old}</del></div><a href="#">상품 자세히 보기 →</a></div></article>` : `
    <article class="sub-card" id="${card.id}"><span class="sub-card-number">0${index + 1}</span><span class="sub-card-tag">${card.tag}</span><h3>${card.title}</h3><p>${card.text}</p><a href="#">자세히 보기 →</a></article>`).join('');

  document.querySelector('#subpageMain').innerHTML = `
    <div class="breadcrumb"><a href="index.html">HOME</a><span>›</span>${labelMap[section]}</div>
    <section class="sub-hero sub-${section}"><div class="sub-hero-inner"><div class="sub-hero-copy"><p class="sub-kicker">${page.label}</p><h1>${page.title.replace('\n','<br>')}</h1><p>${page.description}</p><p class="sub-slogan">Healthy Routine, Better Everyday.</p></div></div></section>
    <section class="sub-section"><div class="sub-intro-grid"><div class="sub-intro-image"><img src="${page.image}" alt=""></div><div class="sub-intro-copy"><small>${page.introLabel}</small><h2>${page.introTitle.replace('\n','<br>')}</h2><p>${page.intro}</p><div class="sub-intro-points">${points}</div></div></div></section>
    <section class="sub-bg"><div class="sub-section">${section === 'shop' ? '<span class="sub-anchor" id="best"></span>' : ''}<div class="sub-section-head"><div><p>${page.label}</p><h2>${page.lnb[0][0]}</h2></div><a href="#${page.lnb[0][1]}">전체 보기 →</a></div><div class="sub-card-grid">${cards}</div></div></section>
    <section class="sub-cta"><p>VIONA와 함께 시작하는 건강한 변화</p><h2>오늘의 작은 선택을 내일의 루틴으로</h2><a href="shop.html">추천 상품 만나보기 →</a></section>`;

  document.querySelector('#sharedFooter').innerHTML = `<footer><div class="footer-top"><div><a class="logo footer-logo" href="index.html">VIONA<span>●</span></a><p>Healthy Routine, Better Everyday.</p><div class="social"><a href="#">instagram</a><a href="#">youtube</a><a href="#">kakao</a></div></div><div class="footer-links"><div><b>SHOP</b><a href="shop.html">전체상품</a><a href="shop.html#best">베스트</a><a href="shop.html#new">신상품</a></div><div><b>CONTENTS</b><a href="routine.html">건강 루틴</a><a href="recipe.html">건강 레시피</a><a href="magazine.html">매거진</a></div><div><b>HELP</b><a href="#">공지사항</a><a href="#">FAQ</a><a href="#">1:1 문의</a></div><div><b>CUSTOMER CENTER</b><strong>1588-2048</strong><p>평일 10:00 — 17:00<br>점심 12:00 — 13:00</p></div></div></div><div class="footer-bottom"><p>주식회사 비오나 · 대표 김비오 · 서울특별시 성동구 성수이로 00<br>사업자등록번호 123-45-67890 · 통신판매업신고 2026-서울성동-0000</p><div><a href="#">이용약관</a><a href="#">개인정보처리방침</a><span>© 2026 VIONA. ALL RIGHTS RESERVED.</span></div></div></footer>`;

  /* LNB 클릭 시 현재 탭 표시 */
  const lnbLinks = [...document.querySelectorAll('.lnb a')];
  function activateLnbFromHash() {
    const target = lnbLinks.find(link => link.getAttribute('href') === window.location.hash) || lnbLinks[0];
    lnbLinks.forEach(item => { item.classList.remove('active'); item.removeAttribute('aria-current'); });
    target?.classList.add('active'); target?.setAttribute('aria-current','page');
  }
  lnbLinks.forEach(link => link.addEventListener('click', () => {
    lnbLinks.forEach(item => { item.classList.remove('active'); item.removeAttribute('aria-current'); });
    link.classList.add('active'); link.setAttribute('aria-current','page');
  }));
  window.addEventListener('hashchange', activateLnbFromHash);
  activateLnbFromHash();
})();
