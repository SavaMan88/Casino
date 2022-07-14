const BURGER = document.querySelector('.js-burg-open');
const NAV = document.querySelector('.js-burg');
const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

const burgerMenu = (() => {
    const burgerInit = () => {
        if(!BURGER) return;

        BURGER.addEventListener('click', (e) => {
            if(!e.currentTarget.classList.contains('active')) {
                openBurger();
            } else {
                closeBurger();
            }
        });
    };

    const openBurger = () => {
        BURGER.classList.add(CLASS_ACTIVE);
        NAV.classList.add(CLASS_ACTIVE);
        BODY.classList.add(CLASS_OVERFLOW);
    };

    const closeBurger = () => {
        BURGER.classList.remove(CLASS_ACTIVE);
        NAV.classList.remove(CLASS_ACTIVE);
        BODY.classList.remove(CLASS_OVERFLOW);
    };

    const init = () => {
        burgerInit();
    };

    return {
        init,
        closeBurger
    };
})();

burgerMenu.init();
