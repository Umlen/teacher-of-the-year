document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-menu').style.display = 'block';
    document.querySelector('.blackout').style.display = 'block';
});

document.querySelector('.close-mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').style.display = 'none';
    document.querySelector('.blackout').style.display = 'none';
});
