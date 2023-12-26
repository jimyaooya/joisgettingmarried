
const getOpacity = (progress) =>{
    const THREARSHOLD = 0.15;
    return progress > THREARSHOLD ? (progress - THREARSHOLD) * 3 : 0;
}

const onScroll = () => {
    const IMG_WIDTH = document.documentElement.clientWidth > 1024 ? 1024 : document.documentElement.clientWidth;
    const IMG_COUNTS = ARRAY_OF_IMG_LINKS.length;
    const IMG_TOTAL_LENGTH = IMG_WIDTH * IMG_COUNTS;
    const bufferDivElement = document.querySelector('.bufferDiv');
    bufferDivElement.style = `width : ${document.documentElement.clientHeight/2}px`;

    const MIN_IMG_HEIGHT = window.innerHeight - 100;
    const IMG_HEIGHT = (800 > MIN_IMG_HEIGHT ? MIN_IMG_HEIGHT : 800)
    const element = document.querySelector('.scroll-animation');

    const aniStart = document.querySelector('.ani_start').getBoundingClientRect().top;
    const aniEnd = document.querySelector('.ani_end').getBoundingClientRect().top;

    const topPos = aniStart > 0 ? aniStart : 0;
    const marginTop = document.documentElement.clientHeight/2 - IMG_HEIGHT/2;
    let animationProgress = (document.documentElement.clientHeight - (aniStart + marginTop)) / (aniEnd - (IMG_HEIGHT/1.5) - aniStart);
    animationProgress = animationProgress > 1 ? 1 : animationProgress;
    const keyframeRight = -IMG_TOTAL_LENGTH + animationProgress * IMG_TOTAL_LENGTH;

    element.style = `
        position: fixed;
        width: ${IMG_TOTAL_LENGTH}px;
        height: ${IMG_HEIGHT}px;
        margin-top: ${marginTop}px;
        right: ${keyframeRight}px;
        top: ${topPos}px;
    `;
    document.querySelector(".ani_start").style = `height: ${IMG_TOTAL_LENGTH + marginTop}px`;
};