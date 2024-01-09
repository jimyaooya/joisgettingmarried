const callTmap = (lat, lng, name) => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
}

const callKakaomap = (lat, lng) => {
    const url = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
    window.location.href = url;
}

const callNavermap = (lat, lng, name) => {
    const url = `nmap://route/walk?dlat=${lat}&dlng=${lng}&dname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
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