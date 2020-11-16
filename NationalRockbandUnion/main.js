/*****************************************************
*  title: main.js                                    *
*  date: November 9th, 2020                          *
*  author: Jeremy Hong                               * 
*  description: Main script of this web application  *
*                                                    * 

******************************************************/

//main.js
"use strict";

// navbar hide/hover 변수 선언
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// Scroll Event에 따라 navbar event 추가하기.
document.addEventListener('scroll', ()=>{

  // 현재 스크롤 Y좌표 위치
  console.log(window.scrollY);
  // navbar 태그 높이
  console.log(`navbarHeight: ${navbarHeight}`);

  //현재 navbar 태그 높이보다 스크롤한 높이 값이 더 낮으면 헤더 페이드인
  if(window.scrollY < navbarHeight){
    navbar.classList.add('navbar-fadein');
  }
  else{
    navbar.classList.remove('navbar-fadein');
  }
})

// navbar tag 토글버튼 이벤트 (마우스 갖다대면 색깔 변하게)