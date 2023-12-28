let spanningTimefacor = 1.0;
const initialPaths = (map) => {
    const byWalk1_학동역 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.03314169630737, 37.514563488928026],
            [127.03563899416444, 37.5153196050152],
            [127.03560476927812, 37.51470693276331],
            [127.03718290667643, 37.51516595844566],
            [127.03772523883408, 37.51395844131843],
            [127.03734909202383, 37.51385044038203],
            [127.03728976168856, 37.51395632709165]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#13D',
        strokeOpacity: 1,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });
    
    const byWalk2_구청역 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.040667740215, 37.51695104967435],
            [127.03718325424147, 37.515866488715794],
            [127.03718290667643, 37.51516595844566],
            [127.03772523883408, 37.51395844131843],
            [127.03734909202383, 37.51385044038203],
            [127.03728976168856, 37.51395632709165]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#13D',
        strokeOpacity: 1,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });
    const byWalk3_세관앞 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.0364309243964, 37.51560993711002],
            [127.03718325424147, 37.515866488715794],
            [127.03718290667643, 37.51516595844566],
            [127.03772523883408, 37.51395844131843],
            [127.03734909202383, 37.51385044038203],
            [127.03728976168856, 37.51395632709165]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#13D',
        strokeOpacity: 1,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });

    const byBus신사1출 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.0209799320751, 37.516561998473854],
            [127.02174072186925, 37.516886222168225],
            [127.0217774672548, 37.51682765016945]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#13D',
        strokeOpacity: 1,
        strokeWeight: 3,
        endIcon: 2,
        visible:false
    });
    
    const bus_강남08 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.02179162366005, 37.516886212788016],
            [127.02796305861294, 37.51958341786762],
            [127.03067565374516, 37.514050582891265],
            [127.0363262827229, 37.51558519173717]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#1D3',
        strokeStyle : 'shortdash',
        strokeOpacity: 0.35,
        strokeOpacity: 1,
        strokeWeight: 3,
        endIcon: 2,
        visible:false
    });
    const byShuttle_구청역앞 = new naver.maps.Polyline({
        map: map,
        path: [
            [127.040667740215,   37.51689104967435],
            [127.04000593110173, 37.51669134756743],
            [127.04004547919845, 37.51661249635883]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#13D',
        strokeOpacity: 1,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });
    
    const byShuttle = new naver.maps.Polyline({
        map: map,
        path: [
            [127.04014547919845, 37.51661249635883],
            [127.04007666166046, 37.51685439383417],
            [127.04128154882456, 37.51723915784424],
            [127.0415413101527, 37.516509253948676],
            [127.0385574446202, 37.5155957470208],
            [127.03912238469381, 37.51439722622762],
            [127.03734909202383, 37.51385044038203]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeStyle : 'shortdash',
        strokeColor: '#FA1',
        strokeOpacity: 0.35,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });

    const byShuttle_skhub = new naver.maps.Polyline({
        map: map,
        path: [
            [127.04054603416265, 37.51675287074826],
            [127.04048953271032, 37.5168565055326],
            [127.04000593110173, 37.51669134756743],
            [127.04004547919845, 37.51661249635883]
        ],
        startIcon: 3,
        startIconSize: 10,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeColor: '#1D3',
        strokeOpacity: 1,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });
    const parkingLotEntrance = new naver.maps.Polyline({
        map: map,
        path: [
            [127.04113404107818, 37.51640578107615],
            [127.0410577765147, 37.51656573574016]
        ],
        startIcon: 3,
        startIconSize: 8,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeStyle : 'shortdash',
        strokeColor: '#F33',
        strokeOpacity: 0.75,
        strokeWeight: 5,
        endIcon: 2,
        visible:false
    });
    
    const paths = [
        {
            line : parkingLotEntrance,
            filter: 0x00010,
            description: ['제휴 주차장인 SK허브블루에 주차해주세요\n주차장 출입구는 건물 뒷편에 있습니다\n 주차는 2시간 무료이니 이용에 참고해주세요 :)'],
            shortdesc: ['SK허브블루 주차장 주차, 2시간 무료'],
            spanningTime : 7500
        },
        {
            line : byWalk1_학동역,
            filter: 0x10000,
            description: ['학동역 1번 출구로 나오셔서 10분(650M)가량 도보로 이동해주세요'],
            shortdesc: ['학동역 1번출구, 도보 10분(650M) 이동'],

            spanningTime : 2500
        },
        {
            line : byBus신사1출,
            filter: 0x00100,
            description: ['신사역 1번 출구로 나와\n 롯데시네마 앞 정류장에서 강남 08번 버스를 탑승해주세요'],
            shortdesc: ['신사역 1번 출구'],
            spanningTime : 6000
        },
        {
            line : bus_강남08,
            filter: 0x00100,
            description: ['11분 정도를 버스를 탑승해주세요'],
            shortdesc: ['강남08번 마을버스 탑승 (11분이동 "세관앞" 정류장 하차)'],
            spanningTime : 3500
        },
        {
            line : byWalk3_세관앞,
            filter: 0x00100,
            description: ['세관앞 정류장에서 내리셔서\n 4분(250M)가량 도보로 이동해주세요'],
            shortdesc: ['도보 4분(250M) 이동'],
            spanningTime : 3500
        },
        {
            line : byWalk2_구청역,
            filter: 0x00000,
            description: ['강남구청역에서 내려 2번출구로 나오셔서 600m 도보로 이동해주세요'],
            shortdesc: ['강남구청역 2번출구, 도보 9분(600M) 이동'],
            spanningTime : 5500
        },
        {
            line : byShuttle_구청역앞,
            filter: 0x01000,
            description: ['강남구청역에서 내려 2번출구로 나오셔서\n 출구앞 버스정류장에서 기다리고계시면\n셔틀이 옵니다'],
            shortdesc: ['강남구청역 2번출구 앞 버스정류장에서 셔틀 탑승'],
            spanningTime : 8000
        },
        {
            line : byShuttle_skhub,
            filter: 0x00010,
            description: ['주차를 하신뒤 1층 건물 출입구로나오셔서\n 출구앞 버스정류장에서 기다리고계시면\n셔틀이 옵니다'],
            shortdesc: ['건물 출입앞 버스정류장에서 셔틀 탑승'],
            spanningTime : 8000
        },
        {
            line : byShuttle,
            filter: 0x01010,
            description: ['예식장 셔틀을 타고 예식장으로 이동해주세요'],
            shortdesc: ['예식장 셔틀 이용'],
            spanningTime : 5000
        },
    ];
    return paths;
}
const setSpanningTimeFactor = (factor) => {
    spanningTimefacor = factor;
}

let currentPaths = undefined;
let currentIdx = 0;
let spanningTime = undefined;
let animCallback = undefined;

const clearAnimCallback = () => {
    if(animCallback){
        clearTimeout(animCallback);
        animCallback = undefined;
        currentIdx = 0;
    }
};
const panToPathBound = (path) =>{
    const bounds = path.line.getBounds();
    map.panToBounds(
        bounds,
        {duration:500, easing: 'easeOutCubic'},
        {top: 5, left: 5, right: 5, bottom:5}
    );
}
const panToGlobalMarker = () => {
    const windowWidth = document.documentElement.clientWidth;
    const targetZoom = windowWidth < 768 ? 18 : 19;
    map.setZoom(targetZoom);
    map.panTo(globalMarker.getPosition());
}

const animateZoomPath = () => {
    const spanningTime = ((currentIdx === currentAnimTargetPaths.length) ? 6000 : (currentIdx === 0 ? 3500 : currentAnimTargetPaths[currentIdx-1].spanningTime)) * spanningTimefacor;
    animCallback = setTimeout(() => {
        const descriptionDiv = document.getElementById('map_navi_description');
        descriptionDiv.classList.remove('sub_desciption');
        descriptionDiv.classList.remove('desciption_animation');
        void descriptionDiv.offsetWidth;
        descriptionDiv.classList.add('desciption_animation');
        if(currentIdx === currentAnimTargetPaths.length){
            descriptionDiv.textContent = `${(currentIdx+1)}. 도착!`;
            currentIdx = 0;
            panToGlobalMarker();
        }else{
            descriptionDiv.textContent = `${(currentIdx+1)}. ${currentAnimTargetPaths[currentIdx].description}`;
            panToPathBound(currentAnimTargetPaths[currentIdx++]);
        }
        animateZoomPath(currentAnimTargetPaths);
    }, spanningTime);
}

const setVisilbities = (filter,paths) => {
    const bounds = {
        minPoint : {x:Number.MAX_VALUE, y:Number.MAX_VALUE},
        maxPoint : {x:Number.MIN_VALUE, y:Number.MIN_VALUE}
    }
    const targetPaths = [];
    paths.forEach((path)=>{
        const isVisible = (path.filter & filter) > 0 ? true : false
        if(isVisible){
            bounds.minPoint.x = Math.min(bounds.minPoint.x, path.line.getBounds()._min.x);
            bounds.minPoint.y = Math.min(bounds.minPoint.y, path.line.getBounds()._min.y);
            bounds.maxPoint.x = Math.max(bounds.maxPoint.x, path.line.getBounds()._max.x);
            bounds.maxPoint.y = Math.max(bounds.maxPoint.y, path.line.getBounds()._max.y);
            targetPaths.push(path);
        }
        path.line.setVisible(isVisible);
    });
    map.panToBounds(
        new naver.maps.PointBounds(bounds.minPoint, bounds.maxPoint),
        {duration:500,easing: 'easeOutCubic'},
        {top: 1, left: 1, right: 1, bottom: 1}
    );
    const descriptionDiv = document.getElementById('map_navi_description');
    descriptionDiv.classList.add('sub_desciption');
    let shortdescDiv = "";
    targetPaths.forEach((path,idx)=>{
        shortdescDiv += `${(idx + 1)}. ${path.shortdesc}\n `;
    });
    shortdescDiv += `${(targetPaths.length + 1)}. 도착\n `;
    descriptionDiv.textContent = shortdescDiv;

    currentAnimTargetPaths = targetPaths;
    clearAnimCallback();
    animateZoomPath();
    
}
