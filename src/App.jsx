import { useState,useEffect,useRef} from 'react'
import React from 'react';

import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Mybox from './Component/Header/Mybox';
import Footer from './Component/Footer/Footer';
import Mainer from './Component/Main/Mainer';

import { IoIosSearch } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function App() {

const myboxref = useRef(null);

// 클래스가 on이 들어왔을 때에만 document에 이벤트 등록하기

// on이 들어온 여부를 useState로 관리하기
const [ison,setison] = useState(false);

// on 클래스의 변화 감지
useEffect(()=>{
const abs = document.querySelector('.mybox');

// MutationObserver
const observer = new MutationObserver((mutations)=>{
mutations.forEach((mutation)=>{
if(mutation.attributeName === 'class') {
const currentison = abs.classList.contains('on');
setison(currentison);
}
})
});

observer.observe(abs, { attributes: true});

return ()=>{
observer.disconnect();
}
});

useEffect(()=>{
// ison 상태에 따라 클릭 이벤트 리스너 등록 및 제거
const closing = (e) => {
const abs = document.querySelector('.mybox');
if(!abs.contains(e.target) && abs.classList.contains('on')) {
}
}

if(ison) {
document.addEventListener('click',closing);
}

return () => {
if(ison) {
document.removeEventListener('click',closing);
}
}
},[ison])

// My 인터파크 버튼
const handleButton = (e) => {
  e.preventDefault();
  const abs = document.querySelectorAll('.mybox');
  if(!ison) {
  setison(false);
  abs[0].classList.add('on');
  }
}

const mobileButton = (e) => {
  e.preventDefault();
  const abs = document.querySelectorAll('.mybox');
  if(!ison) {
  setison(false);
  abs[1].classList.add('on');
  }
}

return (
<BrowserRouter>
  <div className="app_wrap">
      <header>
        <Container>
        <div className="header__one d-flex align-items-center justify-content-between">
          <div className="input__logo d-flex align-items-center">
            <h1 className="logo">
              <Link to="/"><img src="./src/assets/logo.svg" alt="interpark_logo" /></Link>
            </h1>
            <div className="input">
              <input type="text" placeholder="합리적인 비용과 상품 퀄리티에 올인!" />
              <button className="search"><span className="visually-hidden">검색</span>
                <IoIosSearch /></button>
            </div>
          </div>
          <div className="other__func d-flex align-items-center position-relative">
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
            <Link to="/my" className="d-flex align-items-center" onClick={handleButton}><span
              style={{marginRight:'0.35rem'}}>MY 인터파크</span>
            <FiChevronDown />
            </Link>
            <Mybox ref={myboxref} />
          </div>
          <div className="mobile-part position-relative">
            <button className="mobile-btn" onClick={mobileButton}><span className="visually-hidden">Profile</span><CgProfile /></button>
            <Mybox />
          </div>
        </div>
        <div className="header__two">
          <div className="menu">
          <Link to="/tour">
            <span>투어</span>
            <i>
              <img src="./src/assets/icon_tours.avif" alt="투어" />
            </i>
          </Link>
          <Link>
            <span>티켓</span>
            <i>
              <img src="./src/assets/icons_tickets.avif" alt="티켓" />
            </i>
          </Link>
          <Link>
            <span>도서</span>
            <i>
              <img src="./src/assets/icons_book.avif" alt="도서" />
            </i>
          </Link>
          <Link>
            <span>트리플</span>
              <i>
                <img src="./src/assets/icons_triple.avif" alt="트리플" />
              </i>
          </Link>
          <Link>
            <span>W트립특가</span>
                <i>
                  <img src="./src/assets/wtrip.avif" alt="W트립특가" />
                </i>
          </Link>
          <Link>
            <span>청년문화예술패스 신청</span>
          </Link>
          </div>
          <div className="input">
              <input type="text" placeholder="합리적인 비용과 상품 퀄리티에 올인!" />
              <button className="search"><span className="visually-hidden">검색</span>
                <IoIosSearch /></button>
            </div>
        </div>
        </Container>
      </header>
      <Routes>
        <Route path="/" element={<Mainer />}></Route>
      </Routes>
      <Footer />
  </div>
</BrowserRouter>
)
}

export default App