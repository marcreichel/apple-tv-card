const card = document.getElementById('card');

card.addEventListener('mouseenter', () => {
    if (!card.querySelector('.reflection')) {
        const reflection = document.createElement('span');
        reflection.classList.add('reflection');
        card.prepend(reflection);
    }
});

card.addEventListener('mousemove', (event) => {
    const width = card.clientWidth;
    const height = card.clientHeight;
    const angleY = (width / 2 - event.offsetX) * -1 / width * 15;
    const angleX = (height / 2 - event.offsetY) / height * 15;
    card.style.transform = 'scale(1.15) rotateY(' + angleY + 'deg) rotateX(' + angleX + 'deg)';

    const paralaxContent = card.querySelector('.paralax-content');

    if (paralaxContent) {
        paralaxContent.style.transform = 'translateX(' + (angleY * .5) + 'px) translateY(' + (angleX * -.5) + 'px)';
    }

    const reflection = card.querySelector('.reflection');

    if (reflection) {
        reflection.style.transform = 'translateY(calc(-' + (height / 2) + 'px + ' + (angleX) + 'em)) translateX(' + (angleY * -1) + 'em)';
    }
});

card.addEventListener('mouseleave', () => {
    card.style.transform = null;

    const paralaxContent = card.querySelector('.paralax-content');

    if (paralaxContent) {
        paralaxContent.style.transform = null;
    }

    const reflection = card.querySelector('.reflection');

    if (reflection) {
        reflection.style.transform = null;
    }
});
