const callTmap = (lat, lng, name) => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
}

const callKakaonavi = (lat, lng) => {
    const url = `kakaonavi://route?sp=${lat},${lng}&ep=${lat},${lng}&by=FOOT`;
    window.location.href = url;
}

const callKakaomap = (lat, lng) => {
    const url = `kakaomap://look?p=${lat},${lng}`;
    window.location.href = url;
}

const callNavermap = (lat, lng, name) => {
    const url = `nmap://route/walk?dlat=${lat}&dlng=${lng}&dname=${name}&appScheme=callSchemes://`;
    window.location.href = url;
}