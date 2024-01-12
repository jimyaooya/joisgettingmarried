
/**
 * progress 에 따른 opacity 반환
 * @param {number} progress - animation progress 정도
 * @returns 
 */
const getOpacity = (progress) =>{
    const THREARSHOLD = 0.15;
    return progress > THREARSHOLD ? (progress - THREARSHOLD) * 3 : 0;
}

/**
 * scroll에 따른 gallery animation 처리
 */
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
    let galleryContents = document.querySelectorAll('.gallery_content');
    galleryContents.forEach((content, idx) => {
        const isVisible =(
            (IMG_WIDTH * (idx - 1)) - marginTop < animationProgress * IMG_TOTAL_LENGTH &&
            (IMG_WIDTH * (idx + 3)) - marginTop + window.innerWidth > animationProgress * IMG_TOTAL_LENGTH
        );
        if(isVisible){
            content.classList.add('gallery_content_visible');
        }else{
            content.classList.remove('gallery_content_visible');
        }
    });
    document.querySelector(".ani_start").style = `height: ${IMG_TOTAL_LENGTH + marginTop}px`;

    
    const isMaxScrollDown = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

    if(isMaxScrollDown){
        const dimDiv = document.querySelector('.dim');
        const isVisible = dimDiv.style.visibility === 'visible';
        if(!isVisible){
            showDimDiv();
            window.scrollTo({
                top: window.scrollY - 250
            });
        }
    }
};

const toHome = () => {
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    });
}

const toGallery = () => {
    window.scrollTo({
        top: document.querySelector('.ani_start').getBoundingClientRect().top,
        behavior: `smooth`
    });
}