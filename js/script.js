'use strict';

const humb = document.querySelector('#hamb');
const poppup = document.querySelector('#poppup');
const menu = document.querySelector('.menu').cloneNode(1);
const body = document.body;

humb.addEventListener('click', humbHandler);

function humbHandler(event) {
   event.preventDefault();
   
   if (humb.classList.contains('active')) {
      humb.classList.remove('active');
      poppup.classList.remove('open');
      body.style.overflow = '';
   } else {
      humb.classList.add('active');
      poppup.classList.add('open');
      body.style.overflow = 'hidden';
   }

   renderPoppup();
}

function renderPoppup() {
   poppup.append(menu);
}