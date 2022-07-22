const showPopupBtns = document.querySelectorAll('.js-show-popup');
const popups = document.querySelectorAll('.js-popup');
const body = document.body;
const overlay = document.querySelector('.js-overlay');

const CLASS_ACTION = 'active';
const CLASS_OVER = 'overflow';

const popupsFunc = (() => {
    const showPopup = (event) => {
        const openBtn = event.target.closest('.js-show-popup');
        const activePopup = document.querySelector('.js-popup.active');
        const targetPopup = document.querySelector(`[data-popup=${openBtn.dataset.trigger}]`);

        if (activePopup) {
            activePopup.classList.remove(CLASS_ACTION);
        }

        if (openBtn.dataset.tab) {
            targetPopup.querySelector(`[data-tab="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTION);
            targetPopup.querySelector(`[data-content="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTION);
        }

        targetPopup.classList.add(CLASS_ACTION);
        body.classList.add(CLASS_OVER);
        overlay.classList.add(CLASS_ACTIVE);
    };

    const hidePopup = (activePopup) => {
        if (!activePopup) {
            return;
        }
        body.classList.remove(CLASS_OVER);
        overlay.classList.remove(CLASS_ACTION);
        activePopup.classList.remove(CLASS_ACTION);

        if (document.querySelector('.active[data-content]') && document.querySelector('.active[data-tab]')) {
            document.querySelector('.active[data-content]').classList.remove(CLASS_ACTION);
            document.querySelector('.active[data-tab]').classList.remove(CLASS_ACTION);
        }
    };

    const showPopupInit = () => {
        if (showPopupBtns.length) {
            showPopupBtns.forEach((opener) => {
                opener.addEventListener('click', (event) => {
                    showPopup(event);
                });
            });
        }

        if (overlay) {
            overlay.addEventListener('click', () => {
                hidePopup(document.querySelector('.js-popup.active'));
            });
        }
        if (popups.length) {
            popups.forEach((popup) => {
                popup.addEventListener('click', (event) => {
                    const closeBtn = event.target.closest('.js-popup-close');
                    if (!closeBtn) {
                        return;
                    }
                    hidePopup(popup);
                });
            });
        }
    };

    const init = () => {
        if (popups.length) {
            showPopupInit();
        }
    };

    return {
        init,
    };
})();

popupsFunc.init();
