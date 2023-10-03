document.addEventListener('DOMContentLoaded', () => {

    const dialog = document.querySelector('.modal');

    const menuBtn = document.querySelector('.header__button--menu');
    const closeBtn = document.querySelector('.header__button--close');

    menuBtn.addEventListener('click', ()=> {
        dialog.showModal();

    });

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });

    window.addEventListener('resize', () => {
        const MOBILE_WIDTH = 1180;
        const width = window.innerWidth;
        if(width <= MOBILE_WIDTH) return;
        dialog.close();
    })

});

