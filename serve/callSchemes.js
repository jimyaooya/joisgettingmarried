let currentTargertScheme = undefined;

const setScheme = (scheme) => {
    currentTargertScheme = scheme;

    // get dim element
    const dim = document.querySelector('.dim_for_navi');
    dim.style.visibility = 'visible';
}

const closeNaviDim = () =>{
    const dim = document.querySelector('.dim_for_navi');
    dim.style.visibility = 'collapse';
}

const toParkingLot = () => {
    try{
        const lat = 37.51675036659504;
        const lng = 127.04100014039027;
        const name = 'SK허브블루 주차장';
        callSchemes(lat, lng, name, false);
    }finally{
        closeNaviDim();
    }
}

const toWeddingHall = () => {
    try{
        const lat = 37.5140508;
        const lng = 127.0372835;
        const name = '빌라드지디강남';
        callSchemes(lat, lng, name, true);
    }finally{
        closeNaviDim();
    }
}

const callTmap = (lat, lng, name) => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
}

const callKakaomap = (lat, lng, walkOrCar) => {
    const url = `kakaomap://route?ep=${lat},${lng}&by=${walkOrCar ? 'PUBLICTRANSIT' : 'CAR'}`;
    window.location.href = url;
}

const callNavermap = (lat, lng, name, walkOrCar) => {
    const url = `nmap://route/${walkOrCar ? 'public' : 'car'}?dlat=${lat}&dlng=${lng}&dname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
}

const callSchemes = (lat, lng, name, walkOrCar) => {
    if(currentTargertScheme === 'tmap') {
        callTmap(lat, lng, name);
    } else if(currentTargertScheme === 'kakaomap') {    
        callKakaomap(lat, lng, walkOrCar);
    } else if(currentTargertScheme === 'navermap') {
        callNavermap(lat, lng, name, walkOrCar);
    }else{
        console.error('Invalid scheme');
    }
}

const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    toast('주소가 복사되었습니다.');
}