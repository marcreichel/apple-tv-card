import './styles.scss';

(function() {
    document.querySelectorAll('.apple-tv-card').forEach(card => {
        const container = card.closest('.apple-tv-card-container');

        const title = container.querySelector('.apple-tv-card-title');

        if (!title) {
            container.classList.add('no-title');
        }

        const size = Math.max(card.clientWidth, card.clientHeight);

        card.style.fontSize = (size / 3.5) + 'px';

        card.addEventListener('mouseenter', handleStart);
        card.addEventListener('touchstart', handleStart);

        card.addEventListener('mousemove', handleMove);
        card.addEventListener('touchmove', handleMove);

        card.addEventListener('mouseleave', handleEnd);
        card.addEventListener('touchend', handleEnd);
        card.addEventListener('touchcancel', handleEnd);
    });

    window.addEventListener('resize', function() {
        document.querySelectorAll('.apple-tv-card').forEach(card => {
            const size = Math.max(card.clientWidth, card.clientHeight);
            card.style.fontSize = (size / 3.5) + 'px';
        });
    });

    function handleStart(event) {
        let element = event.target.closest('.apple-tv-card');
        element.classList.add('hover');
        handleMove(event);
    }

    function handleMove(event) {
        let element = event.target.closest('.apple-tv-card');

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

        const perspective = Math.max(width, height);

        const container = element.closest('.apple-tv-card-container');

        if (container) {
            container.style.perspective = (perspective * 2.5) + 'px';
        }

        if (mediaQuery && !mediaQuery.matches) {
            element.style.transform = 'translateZ(4rem) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg) translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
        }

        const parallaxContent = element.querySelector('.parallax-content');

        if (parallaxContent && mediaQuery && !mediaQuery.matches) {
            parallaxContent.style.transform = 'translateX(' + (translateX * -.65) + 'px) translateY(' + (translateY * -.65) + 'px)';
        }

        const reflection = element.querySelector('.reflection');

        if (reflection && mediaQuery && !mediaQuery.matches) {
            reflection.style.width = (perspective * 1.5) + 'px';
            reflection.style.height = (perspective * 1.5) + 'px';
            reflection.style.margin = (perspective * -.75) + 'px 0 0 ' + (perspective * -.75) + 'px';
            reflection.style.transform = 'translateY(' + (posY - (height / 2)) + 'px) translateX(' + ((width * .1) + (posX * .8)) + 'px)';
        }
    }

    function handleEnd(event) {
        let element = event.target.closest('.apple-tv-card');

        element.classList.remove('hover');

        element.style.transform = null;

        const parallaxContent = element.querySelector('.parallax-content');

        if (parallaxContent) {
            parallaxContent.style.transform = null;
        }

        const reflection = element.querySelector('.reflection');

        if (reflection) {
            reflection.style.transform = null;
        }
    }
})();
