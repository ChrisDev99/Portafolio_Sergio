const menuLinksContainer = document.querySelector('.menu-links-container');
const closeMenuIconContainer = document.querySelector('.close-menu-icon-container');
const menuIconContainer = document.querySelector('.menu-icon-container');

menuIconContainer.addEventListener('click', show);
closeMenuIconContainer.addEventListener('click', close);

function show() {
    menuLinksContainer.style.display = 'flex';
    menuLinksContainer.style.top = '0';
}

function close() {
    menuLinksContainer.style.top = '-100%';
}