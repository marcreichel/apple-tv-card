import './styles.scss';

(function() {
    document.querySelectorAll('.apple-tv-card').forEach(card => {
        card.addEventListener('mouseenter', handleMove);
        card.addEventListener('touchstart', handleMove);
        card.addEventListener('mousemove', handleMove);
        card.addEventListener('touchmove', handleMove);

        card.addEventListener('mouseleave', handleEnd);
        card.addEventListener('touchend', handleEnd);
        card.addEventListener('touchcancel', handleEnd);
    });

    function handleMove(event) {
        event.preventDefault();

        let element = event.target.closest('.apple-tv-card');

        element.classList.add('hover');

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (!element.querySelector('.reflection') && mediaQuery && !mediaQuery.matches) {
            const reflection = document.createElement('span');
            reflection.classList.add('reflection');
            element.prepend(reflection);
        }

        let posX;
        let posY;

        if (event.type === 'touchmove' || event.type === 'touchstart') {
            const touch = event.touches[0];

            const rect = element.getBoundingClientRect();

            posX = touch.pageX - rect.left;
            posY = touch.pageY - rect.top;

            const elementFromPoint = document.elementFromPoint(touch.pageX, touch.pageY);

            if (!elementFromPoint || element !== elementFromPoint.closest('.apple-tv-card')) {
                handleEnd(event);
                return;
            }
        } else {
            posX = event.offsetX;
            posY = event.offsetY;
        }

        const width = element.clientWidth;
        const height = element.clientHeight;
        const angleY = (width / 2 - posX) / width * 10;
        const angleX = (height / 2 - posY) * -1 / height * 10;
        const translateX = ((width / 2 - posX)) * -1 / width * 10;
        const translateY = ((height / 2 - posY)) * -1 / height * 10;

        if (!mediaQuery || mediaQuery.matches) {
            element.style.transform = 'perspective(' + (width * 2) + 'px) translateZ(4rem)';
        } else {
            element.style.transform = 'perspective(' + (width * 2) + 'px) translateZ(4rem) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg) translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
        }

        const paralaxContent = element.querySelector('.paralax-content');

        if (paralaxContent && mediaQuery && !mediaQuery.matches) {
            paralaxContent.style.transform = 'translateX(' + (translateX * -.65) + 'px) translateY(' + (translateY * -.65) + 'px)';
        }

        const reflection = element.querySelector('.reflection');

        if (reflection && mediaQuery && !mediaQuery.matches) {
            reflection.style.transform = 'translateY(' + (posY - (height / 2)) + 'px) translateX(' + ((width * .1) + (posX * .8)) + 'px)';
        }
    }

    function handleEnd(event) {
        let element = event.target.closest('.apple-tv-card');

        element.classList.remove('hover');

        element.style.transform = null;

        const paralaxContent = element.querySelector('.paralax-content');

        if (paralaxContent) {
            paralaxContent.style.transform = null;
        }

        const reflection = element.querySelector('.reflection');

        if (reflection) {
            reflection.style.transform = null;
        }
    }
})();
