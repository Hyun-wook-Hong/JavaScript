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

  //현재 navbar 태그 높이보다 스크롤한 높이 값이 더 낮으면
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar-after');
  }
  else{
    navbar.classList.remove('navbar-after');
  }
})

// navbar menu 클릭하면 각 section으로 이동
const tagMenu = document.querySelector(".navbar__menu");
tagMenu.addEventListener('click', (event)=>{
  //console.log("클릭 이벤트 테스트!");
  const destination = event.target;
  const link = destination.dataset.link;
  if(link === null){
    return;
  }

  tagMenu.classList.remove('open');
  scrollIntoView(link);
})


/* scrollIntoView function */
function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior:"smooth" });
}