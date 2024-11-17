import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import "./MartMap.css";

const MartMap = () => {
    const [kakaoLoaded, setKakaoLoaded] = useState(false);

    // Kakao Maps 로딩이 완료되었을 때 setKakaoLoaded 상태를 true로 설정
    useKakaoLoader(() => {
        setKakaoLoaded(true);
    });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var locPosition = new kakao.maps.LatLng(lat, lon);
        var message = '<div style="padding:5px;">현재 위치 입니다</div>';
        displayMarker(locPosition, message);
    }, function(error) {
        console.error('Error occurred. Error code: ' + error.code);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
    
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    

    useEffect(() => {
    if (!kakaoLoaded) return; // kakaoLoaded가 true일 때만 실행

    const kakao = window.kakao;

    // 지도 초기화
    const map = new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3, 
        draggable: true,
        scrollwheel: true,
    });

    // 확대/축소 레벨 설정
    map.setMaxLevel(2); // 확대 가능한 최대 레벨 (값을 조절하여 원하는 제한을 설정)
    map.setMinLevel(1); // 축소 가능한 최소 레벨

    // 필요 시 지도 객체를 저장하여 전역적으로 접근할 수 있게 설정
    window.map = map;
}, [kakaoLoaded]);


    return (  
        <div className="Home2">
            <header className="header2">
                <span className="logo2">마트찾기</span>
            </header>
            <Map
                id="map"
                center={{
                    lat: 33.450701,
                    lng: 126.570667,
                }}
                style={{
                    width: "100%",
                    height: "65%",
                }}
                level={3}
                draggable={true} // 지도 이동 활성화
                scrollwheel={true} // 마우스 휠 확대/축소 활성화
            />
        </div>
    );
};

export default MartMap;
