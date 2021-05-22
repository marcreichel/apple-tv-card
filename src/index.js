import './styles.scss';

(function () {
    document.querySelectorAll('.apple-tv-card').forEach(card => {
        const container = card.closest('.apple-tv-card-container');

        const title = container.querySelector('.apple-tv-card-title');

        if (!title) {
            container.classList.add('no-title');
        }

        const size = Math.max(card.clientWidth, card.clientHeight);

        card.style.fontSize = (size / 3.5) + 'px';

        const content = card.querySelector('.content');
        content.setAttribute('tabindex', '0');

        content.addEventListener('focus', handleFocus);
        content.addEventListener('blur', handleBlur);

        card.addEventListener('mouseenter', handleStart);
        card.addEventListener('touchstart', handleStart);

        card.addEventListener('mousemove', handleMove);
        card.addEventListener('touchmove', handleMove);

        card.addEventListener('mouseleave', handleEnd);
        card.addEventListener('touchend', handleEnd);
        card.addEventListener('touchcancel', handleEnd);
    });

    window.addEventListener('resize', function () {
        document.querySelectorAll('.apple-tv-card').forEach(card => {
            const size = Math.max(card.clientWidth, card.clientHeight);
            card.style.fontSize = (size / 3.5) + 'px';
        });
    });

    function handleFocus(event) {
        let element = event.target.closest('.apple-tv-card');

        const width = element.clientWidth;
        const height = element.clientHeight;

        const perspective = Math.max(width, height);

        const container = element.closest('.apple-tv-card-container');

        if (container) {
            container.style.perspective = (perspective * 2.5) + 'px';
        }
    }

    function handleBlur(event) {
        let element = event.target.closest('.apple-tv-card');
        cleanup(element);
    }

    function handleStart(event) {
        let element = event.target.closest('.apple-tv-card');
        element.querySelector('.content').focus();
        element.classList.add('hover');
        handleMove(event);
    }

    function handleMove(event) {
        event.preventDefault(); // TODO: Need workaround for touch devices because this prevents clicking on links

        let element = event.target.closest('.apple-tv-card');

        if (!element.classList.contains('hover')) {
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (element.classList.contains('with-shadow') && !element.querySelector('.shadow') && mediaQuery && !mediaQuery.matches) {
            const shadow = document.createElement('span');
            shadow.classList.add('shadow');
            element.prepend(shadow);
        }

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

        element.querySelectorAll('.parallax-content').forEach((parallaxContent, layer) => {
            if (mediaQuery && !mediaQuery.matches) {
                layer++;
                const modifier = !parallaxContent.classList.contains('reverse') ? -.65 : .2;
                parallaxContent.style.transform = 'translateX(' + (translateX * modifier * layer) + 'px) translateY(' + (translateY * modifier * layer) + 'px)';
            }
        });

        const reflection = element.querySelector('.reflection');

        if (reflection && mediaQuery && !mediaQuery.matches) {
            reflection.style.width = (perspective * 1.5) + 'px';
            reflection.style.height = (perspective * 1.5) + 'px';
            reflection.style.margin = (perspective * -.75) + 'px 0 0 ' + (perspective * -.75) + 'px';
            reflection.style.transform = 'translateY(' + (posY - (height / 2)) + 'px) translateX(' + ((width * .1) + (posX * .8)) + 'px)';
        }

        const shadow = element.querySelector('.shadow');

        if (shadow) {
            if (mediaQuery && !mediaQuery.matches && posY < height / 3) {
                const opacity = 1 / (height / 3) * ((height / 3) - posY);
                shadow.style.opacity = opacity.toString();
                shadow.style.boxShadow = 'inset 0 ' + opacity * -1 + 'em .4em -.5em rgba(0,0,0,' + Math.min(opacity, .35) + ')';
            } else {
                shadow.style.opacity = null;
                shadow.style.boxShadow = null;
            }
        }
    }

    function handleEnd(event) {
        let element = event.target.closest('.apple-tv-card');
        const content = element.querySelector('.content');
        content.blur();
        cleanup(element);
    }

    function cleanup(element) {
        element.classList.remove('hover');

        element.style.transform = null;

        element.querySelectorAll('.parallax-content').forEach(parallaxContent => {
            parallaxContent.style.transform = null;
        });

        const reflection = element.querySelector('.reflection');

        if (reflection) {
            reflection.style.transform = null;
        }

        const shadow = element.querySelector('.shadow');

        if (shadow) {
            shadow.style.boxShadow = null;
            shadow.style.opacity = null;
        }
    }
})();
