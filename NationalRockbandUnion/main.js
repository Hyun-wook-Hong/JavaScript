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
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar-fadein');
  }
  else{
    navbar.classList.remove('navbar-fadein');
  }
})

// navbar menu 누르면 이동
/*
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.target;
    if(link===null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})*/