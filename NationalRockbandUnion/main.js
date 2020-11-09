/*****************************************************
*  title: main.js                                    *
*  date: November 9th, 2020                          *
*  author: Jeremy Hong                               * 
*  description: Main script of this web application  *
*                                                    * 

******************************************************/

//main.js
"use strict";

console.log("Mayday test.");

// 아직 Contents가 없어서 스크롤이 안내려가서 null로 잡힘

// Navbar tag scroll event

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else { navbar.classList.remove('navbar--dark')}
})