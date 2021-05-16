const card = document.getElementById('card');

card.addEventListener('mouseenter', handleMove, false);
card.addEventListener('touchstart', handleMove);
card.addEventListener('mousemove', handleMove, false);
card.addEventListener('touchmove', handleMove);

card.addEventListener('mouseleave', handleEnd, false);
card.addEventListener('touchend', handleEnd);
card.addEventListener('touchcancel', handleEnd);

function handleMove(event) {
    event.preventDefault();

    card.classList.add('hover');

    if (!card.querySelector('.reflection')) {
        const reflection = document.createElement('span');
        reflection.classList.add('reflection');
        card.prepend(reflection);
    }

    let posX;
    let posY;

    if (event.type === 'touchmove' || event.type === 'touchstart') {
        const touch = event.touches[0];

        posX = touch.clientX - card.offsetLeft;
        posY = touch.clientY - card.offsetTop;

        if (card !== document.elementFromPoint(touch.pageX, touch.pageY)) {
            handleEnd();
            return;
        }
    } else {
        posX = event.offsetX;
        posY = event.offsetY;
    }

    const width = card.clientWidth;
    const height = card.clientHeight;
    const angleY = (width / 2 - posX) / width * 10;
    const angleX = (height / 2 - posY) * -1 / height * 10;
    const translateX = ((width / 2 - posX)) * -1 / width * 10;
    const translateY = ((height / 2 - posY)) * -1 / height * 10;
    card.style.transform = 'scale(1.15) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg) translateX(' + translateX + 'px) translateY(' + translateY + 'px)';

    const paralaxContent = card.querySelector('.paralax-content');

    if (paralaxContent) {
        paralaxContent.style.transform = 'translateX(' + (angleY * .5) + 'px) translateY(' + (angleX * -.5) + 'px)';
    }

    const reflection = card.querySelector('.reflection');

    if (reflection) {
        reflection.style.transform = 'translateY(calc(-' + (height / 2) + 'px + ' + (angleX) + 'em)) translateX(' + (angleY * -1) + 'em)';
    }
}

function handleEnd() {
    card.classList.remove('hover');

    card.style.transform = null;

    const paralaxContent = card.querySelector('.paralax-content');

    if (paralaxContent) {
        paralaxContent.style.transform = null;
    }

    const reflection = card.querySelector('.reflection');

    if (reflection) {
        reflection.style.transform = null;
    }
}
