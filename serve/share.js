
const kakaoApiInitialize = () => {
    const params = parseParams();
    const targetUrl = 'https://jimyaooya.github.io/joisgettingmarried';
    const combinedUrl = `${targetUrl}?${Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')}`

    Kakao.init('f07d0163ad5f23561d55e2cb59ee286a'); 
    Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
            title: '💌초대합니다 | 이정욱 💍 정지현 | 4월28일 일요일 11:30am | 빌라드지디 강남',
            description: '#초대합니다#하우스웨딩',
            imageUrl:
                'https://jimyaooya.github.io/joisgettingmarried/imgs/wp000a.jpg',
            link: {
                mobileWebUrl: combinedUrl,
                webUrl: combinedUrl,
            },
        },
        buttons: [
            {
                title: '보러가기',
                link: {
                mobileWebUrl: combinedUrl,
                webUrl: combinedUrl,
                },
            },
        ],
    });
}

const copyAccountNumToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    toast('계좌번호가 복사되었습니다.');
}