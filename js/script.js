'use strict';

// Navbar
const nav = document.querySelector('.navbar');
const navBtn = document.querySelector('.navbar__button');

navBtn.addEventListener('click', () => {
	nav.classList.toggle('active');
});

window.addEventListener('hashchange', () => {
	nav.classList.remove('active');
});

// Modal
const target = '#modal';
const btns = document.querySelectorAll(`a[href="${target}"]`);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');
const closeBtn = document.querySelector('.modal__close');

const showModal = () => {
	overlay.classList.add('visible');
	setTimeout(() => modal.classList.add('visible'), 200);
	// Animation Delay
};

const closeModal = () => {
	setTimeout(() => overlay.classList.remove('visible'), 200);
	modal.classList.remove('visible');
};

btns.forEach(btn => btn.addEventListener('click', showModal));
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
