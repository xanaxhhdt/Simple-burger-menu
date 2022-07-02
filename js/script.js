'use strict';

const humb = document.querySelector('#hamb');
const poppup = document.querySelector('#poppup');
const menu = document.querySelector('.menu').cloneNode(1);
const body = document.body;

humb.addEventListener('click', humbHandler);

function humbHandler(event) {
   event.preventDefault();
   
   poppup.classList.toggle('open');
   humb.classList.toggle('active'); 
   body.classList.toggle('noscroll');
   renderPoppup();
}

function renderPoppup() {
   poppup.append(menu);
}