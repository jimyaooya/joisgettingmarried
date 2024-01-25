
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const hideAppSchemeButtons = () => {
    const appSchemeButtonContainer = document.querySelector('#appSchemeButtonsContainer');
    appSchemeButtonContainer.style.display = 'none';
}

const initAppSchemeButtons = () => {
    if(isMobile()){
        return;
    }else{
        hideAppSchemeButtons();
    }
}

/**
 * scroll에 따른 section in-transition anim 처리
 */
const initSectionAnim = () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    const checkSectionVisibility = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop - windowHeight <= 0) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkSectionVisibility);
    checkSectionVisibility();
}

/**
 * init touch event
 */
const initTouch = () => {
    const scrollAnimationElement = document.querySelector(".scroll-animation");
    const touchTargetElement = document.querySelector('.ani_start');
    let touchStartX;
    let touchStartY;
    let touchEndX;
    let touchEndY;
    let startScrollY;
    
    let easeReq = undefined;
    const easing = () => {
        window.scrollBy(0, remainEasingAmount);
        remainEasingAmount *= 0.95;
        if (Math.abs(remainEasingAmount) > 0.1) {
            easeReq = requestAnimationFrame(easing);
        }

        // if scrollAnimationElement is out of screen, stop animation
        const scrollAnimationElementRect = scrollAnimationElement.getBoundingClientRect();
        const isOutOfScreen = scrollAnimationElementRect.bottom < 0 || scrollAnimationElementRect.top > window.innerHeight;
        if(isOutOfScreen){
            cancelAnimationFrame(easeReq);
        }
    }

    const touchStart = (e) => {
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        startScrollY = window.scrollY;
        
        remainEasingAmount = 0;
        cancelAnimationFrame(easeReq);
    }

    let remainEasingAmount = 0.5;
    const touchMove = (e) => {
    }

    const touchEnd = (e) => {
        const touch = e.changedTouches[0];
        touchEndX = touch.clientX;
        touchEndY = touch.clientY;
        remainEasingAmount = (touchStartX - touchEndX) * 0.1;
        easing();
    }

    touchTargetElement.addEventListener("touchstart", touchStart, false);
    touchTargetElement.addEventListener("touchmove", touchMove, false);
    touchTargetElement.addEventListener("touchend", touchEnd, false);
}

/**
 * canvas initialization
 */
const initCanvas = ()=>{
    const canvas = document.getElementById('canvas');
    const setCanvasSize = () => {
        const divTitleBg = document.querySelector('#titleBg');
        canvas.width = divTitleBg.getBoundingClientRect().width;
        canvas.height = divTitleBg.getBoundingClientRect().height;
    }
    
    setCanvasSize();
    window.onresize = function(e) {
        setCanvasSize();
    }
    const cnt = document.documentElement.clientWidth/25;
    twinkle(cnt, canvas);
}

let map = null;
const targetCoord = [37.5140508,127.0372835];
let globalMarker = undefined;
const paths = [];
/**
 * naver map initialization
 * @param {string} option
 */
const initMap = () =>{
    const windowWidth = document.documentElement.clientWidth;
    const targetZoom = windowWidth < 768 ? 15 : 16;

    const mapOptions = {
        center: new naver.maps.LatLng(...targetCoord),
        zoom: targetZoom
    };
    map = new naver.maps.Map('map', mapOptions);
    map.addListener('mousedown', clearAnimCallback);
    map.addListener('touchstart', clearAnimCallback);
    map.addListener('click', clearAnimCallback);
    
    globalMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...targetCoord),
        map: map
    });

    const polygon = new naver.maps.Polygon({
        map: map,
        paths: [
            [127.0371685,37.5141248],
            [127.0373655,37.5141848],
            [127.03744932336295, 37.51395428989442],
            [127.03725680497913, 37.51389903509976],
        ],
        fillColor: '#13F',
        fillOpacity: 0.4,
        strokeWeight: 2,
        strokeColor: '#13F'
    });
    paths.push(...initialPaths(map));
}

/**
 * gallery initialization
 */
const makeImgsElements = () => {
    const scrollAnimationElement = document.querySelector(".scroll-animation");
    ARRAY_OF_IMG_LINKS.forEach((link) => {
        const divElement = document.createElement("div");
        divElement.classList.add("gallery_content");
        divElement.style.backgroundImage = `url(${link})`;
        
        // const divElementBlured = document.createElement("div");
        // divElementBlured.classList.add("gallery_content");
        // divElementBlured.classList.add("gallery_content_blured");
        // divElementBlured.style.backgroundImage = `url(${link})`;
        // divElement.appendChild(divElementBlured);
        scrollAnimationElement.appendChild(divElement);

    });
}


const parseParams = () => {
    const params = {};
    const paramsStr = window.location.search.substring(1);
    const paramsArr = paramsStr.split("&");
    paramsArr.forEach((param) => {
        const key = param.split("=")[0];
        const value = param.split("=")[1];
        params[key] = value;
    });
    return params;
}

/**
 * 
 * @param {number} masking 
 */
const setVisibilityOfFamContactAccountWithMask = (masking) => {
    const accounts = [
        {ele : document.querySelector('#famContact0'), key : "000001"}, // 1
        {ele : document.querySelector('#famContact1'), key : "000010"}, // 2
        {ele : document.querySelector('#famContact2'), key : "000100"}, // 4
        {ele : document.querySelector('#famContactA'), key : "001000"}, // 8
        {ele : document.querySelector('#famContactB'), key : "010000"}, // 16
        {ele : document.querySelector('#famContactC'), key : "100000"} // 32
    ];
    let total = 0;
    accounts.forEach((account) => {
        const num = parseInt(account.key, 2);
        const isVisible = (num & masking) > 0;
        total += isVisible ? num : 0;
        account.ele.style.display = isVisible ? 'grid' : 'none';
    });
    document.querySelector('#famContactSpliter').style.display = ((total & 7) > 0) && ((total & 56)> 0) ? 'block' : 'none';
}

const initFamContactAccount = () => {
    getAccountInfo().then((accounts) => {
        console.log(accounts);
        accounts.forEach((account) => {
            const owElement = document.querySelector(`#accow${account.key}`);
            owElement.innerText = account.owner;
            const accountElement = document.querySelector(`#account${account.key}`);
            accountElement.innerText = account.account;
        });

        const params = parseParams();
        let masking = parseInt(params.masking);
        if(masking === undefined || masking === null || isNaN(masking)){
            masking = 63;
        }
        setVisibilityOfFamContactAccountWithMask(masking);
    });

}