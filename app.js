const card = document.getElementById('card');

card.addEventListener('mouseenter', handleMove);
card.addEventListener('touchstart', handleMove);
card.addEventListener('mousemove', handleMove);
card.addEventListener('touchmove', handleMove);

card.addEventListener('mouseleave', handleEnd);
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
        posX = event.targetTouches[0].clientX - card.offsetLeft;
        posY = event.targetTouches[0].clientY - card.offsetTop;
    } else {
        posX = event.offsetX;
        posY = event.offsetY;
    }

    const width = card.clientWidth;
    const height = card.clientHeight;
    const angleY = (width / 2 - posX) * -1 / width * 15;
    const angleX = (height / 2 - posY) / height * 15;
    card.style.transform = 'scale(1.15) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg)';

    const paralaxContent = card.querySelector('.paralax-content');

    if (paralaxContent) {
        paralaxContent.style.transform = 'translateX(' + (angleY * .5) + 'px) translateY(' + (angleX * -.5) + 'px)';
    }

    const reflection = card.querySelector('.reflection');

    if (reflection) {
        reflection.style.transform = 'translateY(calc(-' + (height / 2) + 'px + ' + (angleX * -1) + 'em)) translateX(' + (angleY) + 'em)';
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
