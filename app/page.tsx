"use client";

import { useState } from "react";

const goals = [
  { icon: "↘", title: "체중 관리", desc: "가볍고 균형 잡힌 하루를 위한 영양 설계" },
  { icon: "◌", title: "장 건강", desc: "매일 편안한 속을 위한 데일리 케어" },
  { icon: "✦", title: "면역 관리", desc: "지치지 않는 일상을 위한 기초 체력 관리" },
  { icon: "↗", title: "활력 에너지", desc: "활기찬 하루를 채우는 에너지 루틴" },
];

const products = [
  { name: "데일리 밸런스 멀티팩", sub: "하루 한 포, 7가지 필수 영양", price: "32,800", old: "41,000", sale: "20%", type: "DAILY", tone: "lime" },
  { name: "그린 바이옴 프로바이오틱스", sub: "100억 유산균으로 시작하는 장 루틴", price: "28,900", old: "34,000", sale: "15%", type: "BIOME", tone: "green" },
  { name: "에너지 부스터 비타민 B", sub: "바쁜 일상에 필요한 활력 충전", price: "24,600", old: "29,000", sale: "15%", type: "ENERGY", tone: "yellow" },
  { name: "순수 초임계 알티지 오메가3", sub: "혈행과 눈 건강을 한 번에", price: "35,700", old: "42,000", sale: "15%", type: "OMEGA", tone: "blue" },
];

const routines = [
  { tag: "MORNING", title: "내 몸을 깨우는\n아침 건강 루틴", desc: "가벼운 스트레칭부터 영양 섭취까지, 하루를 산뜻하게 시작하는 방법", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85" },
  { tag: "WORKOUT", title: "운동 전후,\n영양관리 가이드", desc: "운동 효과를 높이는 섭취 타이밍과 꼭 필요한 영양소를 알아보세요.", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85" },
  { tag: "OFFICE", title: "직장인을 위한\n하루 건강 습관", desc: "오래 앉아 있는 하루에도 쉽게 실천할 수 있는 작은 건강 습관", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85" },
];

const recipes = [
  { name: "허브 닭가슴살 샐러드", time: "15분", kcal: "320 kcal", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85" },
  { name: "베리 그릭요거트 볼", time: "5분", kcal: "240 kcal", image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=85" },
  { name: "그린 단백질 쉐이크", time: "5분", kcal: "180 kcal", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=85" },
  { name: "프루트 오트밀 브런치", time: "10분", kcal: "290 kcal", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=700&q=85" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <div className="topbar">첫 구매 10% 할인 · 5만원 이상 무료배송</div>
      <header className="header">
        <a className="logo" href="#top">FITTORY<span>●</span></a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#goals" onClick={() => setMenuOpen(false)}>HEALTH GOAL</a>
          <a href="#content" onClick={() => setMenuOpen(false)}>ROUTINE</a>
          <a href="#magazine" onClick={() => setMenuOpen(false)}>MAGAZINE</a>
          <a href="#brand" onClick={() => setMenuOpen(false)}>ABOUT</a>
        </nav>
        <div className="header-actions">
          <button aria-label="검색">⌕</button><button aria-label="마이페이지">♙</button>
          <button className="cart" aria-label={`장바구니 ${cart}개`}>Bag <b>{cart}</b></button>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">☰</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">YOUR DAILY WELLNESS PARTNER</p>
          <h1>나에게 맞는<br />건강 루틴을 시작하세요.</h1>
          <p>건강은 특별한 하루가 아닌<br className="mobile-br" /> 작은 습관에서 시작됩니다.</p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => scrollTo("goals")}>건강 루틴 시작하기 <span>→</span></button>
            <button className="btn ghost" onClick={() => scrollTo("shop")}>추천 상품 보기</button>
          </div>
        </div>
        <div className="hero-note"><span>01</span><div /><b>SMALL HABITS<br />BIG CHANGES</b></div>
      </section>

      <section className="section goals" id="goals">
        <div className="section-heading centered"><p className="eyebrow">FIND YOUR ROUTINE</p><h2>지금, 어떤 건강이 필요하세요?</h2><p>오늘의 나에게 필요한 건강 목표를 선택해보세요.</p></div>
        <div className="goal-grid">
          {goals.map((g, i) => <article className="goal-card" key={g.title}><span className="goal-num">0{i + 1}</span><div className="goal-icon">{g.icon}</div><h3>{g.title}</h3><p>{g.desc}</p><button onClick={() => scrollTo("shop")}>추천 상품 보기 <span>→</span></button></article>)}
        </div>
      </section>

      <section className="section products-section" id="shop">
        <div className="section-heading row"><div><p className="eyebrow">MOST LOVED</p><h2>꾸준히 사랑받는 베스트셀러</h2></div><a href="#shop">전체 상품 보기 <span>→</span></a></div>
        <div className="product-grid">
          {products.map((p, i) => <article className="product-card" key={p.name}>
            <div className={`product-visual ${p.tone}`}><span className="rank">BEST 0{i + 1}</span><div className="bottle"><small>FITTORY</small><b>{p.type}</b><i>daily supplement</i></div><button className="heart" aria-label="찜하기">♡</button></div>
            <div className="product-info"><h3>{p.name}</h3><p>{p.sub}</p><div className="price"><b>{p.sale}</b><strong>{p.price}원</strong><del>{p.old}원</del></div><button onClick={() => setCart(cart + 1)}>장바구니 담기 <span>＋</span></button></div>
          </article>)}
        </div>
      </section>

      <section className="routine-section" id="content">
        <div className="section"><div className="section-heading light row"><div><p className="eyebrow">BETTER EVERYDAY</p><h2>건강한 하루를 만드는 작은 습관</h2></div><p>무리하지 않아도 괜찮아요.<br />오늘부터 하나씩 시작해보세요.</p></div>
          <div className="routine-grid">{routines.map(r => <article className="routine-card" key={r.title}><img src={r.image} alt=""/><div className="routine-copy"><span>{r.tag}</span><h3>{r.title.split("\n").map((x,j)=><span key={j}>{x}<br/></span>)}</h3><p>{r.desc}</p><a href="#magazine">자세히 보기 →</a></div></article>)}</div>
        </div>
      </section>

      <section className="section recipes">
        <div className="section-heading row"><div><p className="eyebrow">HEALTHY RECIPE</p><h2>맛있어서 더 즐거운 건강</h2></div><a href="#recipes">레시피 전체보기 <span>→</span></a></div>
        <div className="recipe-grid" id="recipes">{recipes.map(r => <article key={r.name}><div className="recipe-img"><img src={r.image} alt={r.name}/><button aria-label="레시피 저장">＋</button></div><h3>{r.name}</h3><p><span>⏱ {r.time}</span><span>○ {r.kcal}</span></p></article>)}</div>
      </section>

      <section className="magazine section" id="magazine">
        <div className="section-heading centered"><p className="eyebrow">FITTORY JOURNAL</p><h2>알면 더 건강해지는 이야기</h2></div>
        <div className="magazine-grid"><article className="feature-story"><div><span>WELLNESS · 6 MIN READ</span><h3>장 건강을 위한<br />생활 습관 5가지</h3><p>매일 반복되는 작은 습관이 장 건강을 바꿉니다.<br />오늘부터 실천할 수 있는 방법을 소개합니다.</p><a href="#magazine">이야기 읽기 →</a></div></article><div className="story-list">
          {[['NUTRITION','면역력을 높이는 식단, 무엇을 먹어야 할까?','계절이 바뀔 때 챙겨야 할 필수 영양소'],['DIET','다이어트가 자꾸 실패하는 진짜 이유','의지가 아닌 루틴의 관점으로 알아보기'],['GUIDE','영양제는 언제 먹는 것이 좋을까?','흡수율을 높이는 영양제 섭취 시간 가이드']].map((s,i)=><article key={s[1]}><span className="story-index">0{i+2}</span><div><small>{s[0]}</small><h3>{s[1]}</h3><p>{s[2]}</p></div><b>↗</b></article>)}
        </div></div>
      </section>

      <section className="events"><div className="section"><p className="eyebrow">SPECIAL BENEFIT</p><div className="event-grid"><article><span>WELCOME GIFT</span><h3>첫 만남을 위한<br /><b>10% 할인</b></h3><p>신규회원 가입 즉시 쿠폰 지급</p><a href="#shop">가입하고 혜택받기 →</a></article><article><span>7 DAYS CHALLENGE</span><h3>여름 건강 루틴<br /><b>7일 챌린지</b></h3><p>매일 인증하고 특별한 선물까지</p><a href="#content">챌린지 참여하기 →</a></article><article><span>FREE SHIPPING</span><h3>5만원 이상<br /><b>무료배송</b></h3><p>건강 루틴을 배송비 부담 없이</p><a href="#shop">상품 보러가기 →</a></article></div></div></section>

      <section className="section reviews"><div className="section-heading centered"><p className="eyebrow">REAL REVIEW</p><h2>FITTORY와 함께 달라진 일상</h2><p>건강한 변화를 먼저 경험한 고객들의 이야기입니다.</p></div>
        <div className="review-grid">{[
          ['★★★★★','아침마다 챙겨 먹기 시작했는데 확실히 오후 피로감이 덜해요. 한 포씩 포장되어 있어 출근할 때도 정말 편합니다.','데일리 밸런스 멀티팩','김** · 30대'],
          ['★★★★★','꾸준히 먹으니 속이 편안해진 게 느껴져요. 패키지도 깔끔해서 주방에 두고 매일 잊지 않고 챙기게 됩니다.','그린 바이옴 프로바이오틱스','이** · 40대'],
          ['★★★★★','운동 전에 챙겨 먹고 있어요. 성분 설명이 투명하고 콘텐츠도 유용해서 브랜드 자체를 신뢰하게 됐어요.','에너지 부스터 비타민 B','박** · 20대']
        ].map((r,i)=><article key={i}><div className="stars">{r[0]}</div><blockquote>“{r[1]}”</blockquote><div className="review-product"><div className={`mini-bottle m${i}`}>F</div><p><b>{r[2]}</b><span>{r[3]}</span></p></div></article>)}</div>
      </section>

      <section className="brand" id="brand"><div className="brand-image"/><div className="brand-copy"><p className="eyebrow">OUR PHILOSOPHY</p><h2>건강은<br />일상이 되어야 합니다.</h2><p>FITTORY는 올바른 건강정보와 검증된 건강기능식품을 통해<br />누구나 쉽게 건강한 습관을 만들 수 있도록 돕습니다.</p><p>거창한 계획보다 오늘 한 번의 선택이<br />더 나은 내일을 만든다고 믿습니다.</p><a href="#top">FITTORY 이야기 →</a></div></section>

      <section className="newsletter"><div><p className="eyebrow">STAY HEALTHY WITH US</p><h2>건강한 정보를 가장 먼저 받아보세요.</h2><p>새로운 건강 콘텐츠와 FITTORY만의 특별한 혜택을 보내드려요.</p></div><form onSubmit={(e)=>{e.preventDefault(); if(email){setSubscribed(true);setEmail("")}}}><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="이메일 주소를 입력해주세요" aria-label="이메일 주소" required/><button>{subscribed ? "구독 완료 ✓" : "구독하기 →"}</button></form></section>

      <footer><div className="footer-top"><div><a className="logo footer-logo" href="#top">FITTORY<span>●</span></a><p>건강한 일상을 만드는 가장 쉬운 방법</p><div className="social"><a href="#top">instagram</a><a href="#top">youtube</a><a href="#top">kakao</a></div></div><div className="footer-links"><div><b>SHOP</b><a href="#shop">전체상품</a><a href="#shop">베스트</a><a href="#shop">신상품</a></div><div><b>CONTENTS</b><a href="#content">건강 루틴</a><a href="#recipes">건강 레시피</a><a href="#magazine">매거진</a></div><div><b>HELP</b><a href="#top">공지사항</a><a href="#top">FAQ</a><a href="#top">1:1 문의</a></div><div><b>CUSTOMER CENTER</b><strong>1588-2048</strong><p>평일 10:00 — 17:00<br />점심 12:00 — 13:00</p></div></div></div><div className="footer-bottom"><p>주식회사 피토리 · 대표 김피토 · 서울특별시 성동구 성수이로 00<br />사업자등록번호 123-45-67890 · 통신판매업신고 2026-서울성동-0000</p><div><a href="#top">이용약관</a><a href="#top">개인정보처리방침</a><span>© 2026 FITTORY. ALL RIGHTS RESERVED.</span></div></div></footer>
    </main>
  );
}
