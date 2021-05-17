import './styles.scss';

(function() {
    document.querySelectorAll('.apple-tv-card').forEach(card => {
        card.addEventListener('mouseenter', handleMove, false);
        card.addEventListener('touchstart', handleMove);
        card.addEventListener('mousemove', handleMove, false);
        card.addEventListener('touchmove', handleMove);

        card.addEventListener('mouseleave', handleEnd, false);
        card.addEventListener('touchend', handleEnd);
        card.addEventListener('touchcancel', handleEnd);
    });

    function handleMove(event) {
        event.preventDefault();

        this.classList.add('hover');

        if (!this.querySelector('.reflection')) {
            const reflection = document.createElement('span');
            reflection.classList.add('reflection');
            this.prepend(reflection);
        }

        let posX;
        let posY;

        if (event.type === 'touchmove' || event.type === 'touchstart') {
            const touch = event.touches[0];

            posX = touch.clientX - card.offsetLeft;
            posY = touch.clientY - card.offsetTop;

            if (this !== document.elementFromPoint(touch.pageX, touch.pageY)) {
                handleEnd();
                return;
            }
        } else {
            posX = event.offsetX;
            posY = event.offsetY;
        }

        const width = this.clientWidth;
        const height = this.clientHeight;
        const angleY = (width / 2 - posX) / width * 10;
        const angleX = (height / 2 - posY) * -1 / height * 10;
        const translateX = ((width / 2 - posX)) * -1 / width * 10;
        const translateY = ((height / 2 - posY)) * -1 / height * 10;
        this.style.transform = 'translateZ(6rem) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg) translateX(' + translateX + 'px) translateY(' + translateY + 'px)';

        const paralaxContent = this.querySelector('.paralax-content');

        if (paralaxContent) {
            paralaxContent.style.transform = 'translateX(' + (angleY * .4) + '%) translateY(' + (angleX * -.4) + '%)';
        }

        const reflection = this.querySelector('.reflection');

        if (reflection) {
            reflection.style.transform = 'translateY(' + (posY - (height / 2)) + 'px) translateX(' + ((width * .1) + (posX * .8)) + 'px)';
        }
    }

    function handleEnd() {
        this.classList.remove('hover');

        this.style.transform = null;

        const paralaxContent = this.querySelector('.paralax-content');

        if (paralaxContent) {
            paralaxContent.style.transform = null;
        }

        const reflection = this.querySelector('.reflection');

        if (reflection) {
            reflection.style.transform = null;
        }
    }
})();
