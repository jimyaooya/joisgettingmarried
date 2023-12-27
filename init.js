
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
 * canvas initialization
 */
const initCanvas = ()=>{
    const canvas = document.getElementById('canvas');
    const setCanvasSize = () => {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight - 100;
    }
    
    setCanvasSize();
    window.onresize = function(e) {
        setCanvasSize();
    }
    const cnt = document.documentElement.clientWidth/50;
    twinkle(cnt, canvas);
}

/**
 * naver map initialization
 */
const initMap = () =>{
    const targetCoord = [37.5140508,127.0372835];
    const windowWidth = document.documentElement.clientWidth;
    const targetZoom = windowWidth < 768 ? 15 : 16;

    const mapOptions = {
        center: new naver.maps.LatLng(...targetCoord),
        zoom: targetZoom
    };
    const map = new naver.maps.Map('map', mapOptions);
    const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...targetCoord),
        map: map
    });
    const polygon = new naver.maps.Polygon({
        map: map,
        paths: [
            [127.0371685,37.5141248],
            [127.0373655,37.5141848],
            [127.037490,37.5138848],
            [127.0372985,37.5138248],
        ],
        fillColor: '#13F',
        fillOpacity: 0.4,
        strokeWeight: 2,
        strokeColor: '#13F'
    });
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