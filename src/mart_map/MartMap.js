import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import useKakaoLoader from "./useKakaoLoader";
import "./MartMap.css";

const MartMap = () => {
    const [kakaoLoaded, setKakaoLoaded] = useState(false);
    const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 }); // 기본 위치 제주도
    const [accuracy, setAccuracy] = useState(null);
    const [selectedMart, setSelectedMart] = useState(null); // 클릭한 마트의 이름을 저장하는 상태
    const [selectedMartAddress, setSelectedMartAddress] = useState(""); // 클릭한 마트의 주소를 저장하는 상태
    const [isChecked, setIsChecked] = useState(false); // 이미지 클릭 상태 관리

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate

    // 마트 위치 데이터 (예시)
    const marts = [
        { id: 1, name: "월드할인마트", lat: 37.4688367427655, lng: 126.935315072363 },
        { id: 2, name: "제일소비자유통 고시촌점", lat: 37.4666122898112, lng: 126.936241311245 },
        { id: 3, name: "으뜸마트 6호점", lat: 37.4686866288586, lng: 126.936467443039 },
    ];

    // Kakao Maps 로딩이 완료되었을 때 setKakaoLoaded 상태를 true로 설정
    useKakaoLoader(() => {
        setKakaoLoaded(true);
    });

    // 현재 위치를 가져오는 함수
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const accuracy = position.coords.accuracy; // 위치 정확도
                    setPosition({ lat, lng: lon });
                    setAccuracy(accuracy); // 정확도 상태 업데이트
    
                    // 위치 좌표로 주소를 찾기 위해 Geocoder 사용
                    const geocoder = new window.kakao.maps.services.Geocoder();
                    const latlng = new window.kakao.maps.LatLng(lat, lon);
    
                    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const address = result[0].address.address_name;
                            console.log("현재 위치 주소: ", address); // 콘솔에 주소 출력
                        } else {
                            console.error("주소를 찾을 수 없습니다.");
                        }
                    });
                },
                (error) => {
                    console.error("Error occurred. Error code: " + error.code);
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error("사용자가 위치 정보를 허용하지 않았습니다.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error("위치 정보를 찾을 수 없습니다.");
                            break;
                        case error.TIMEOUT:
                            console.error("위치 정보를 가져오는 데 시간이 초과되었습니다.");
                            break;
                        default:
                            console.error("알 수 없는 에러가 발생했습니다.");
                    }
                },
                {
                    enableHighAccuracy: true, // 정확도 높이기
                    timeout: 5000,
                    maximumAge: 0,
                }
            );
        } else {
            console.error("GeoLocation을 사용할 수 없습니다.");
        }
    };
    

    // 마커 클릭 시 해당 마트의 이름과 주소를 상태에 저장
    const handleMarkerClick = (name, lat, lng) => {
        setSelectedMart(name); // 클릭한 마트의 이름을 상태로 설정

        // Kakao Maps Geocoder를 사용해 좌표로 주소를 찾기
        const geocoder = new window.kakao.maps.services.Geocoder();
        const latlng = new window.kakao.maps.LatLng(lat, lng);

        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                setSelectedMartAddress(address); // 주소 상태 업데이트
            } else {
                setSelectedMartAddress("주소를 찾을 수 없습니다.");
            }
        });
    };

    // 처음에 위치를 가져오도록 설정
    useEffect(() => {
        getCurrentLocation();
    }, []);

    // 이미지 클릭 시 상태 변경 및 페이지 이동
    const handleImageClick = () => {
        if (selectedMart) {  // 마트를 클릭했을 때만 이미지 클릭 가능
            setIsChecked(true);
            setTimeout(() => {
                navigate("/address");
            }, 500);
        }
    };

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">마트찾기</span>
            </header>
            <Map
                id="map"
                center={position} // 위치가 바뀔 때마다 지도의 중심이 업데이트 됩니다
                style={{
                    width: "100%",
                    height: "90%",
                }}
                level={3}
                draggable={true}
                scrollwheel={true}
            >
                {/* 현재 위치에 마커 표시 */}
                <MapMarker position={position} />

                {/* 마트들의 위치에 마커 표시 */}
                {marts.map((mart) => (
                    <MapMarker
                        key={mart.id}
                        position={{ lat: mart.lat, lng: mart.lng }}
                        title={mart.name}
                        onClick={() => handleMarkerClick(mart.name, mart.lat, mart.lng)} // 마커 클릭 시 이름과 주소 찾기
                    />
                ))}
            </Map>
            <div className="martMap_div1">
                <div className="martMap_div2">
                    {accuracy && (
                        console.log(`위치 정확도 : ${accuracy}`) // 정확도 표시
                    )}
                    {/* 마커 클릭 시 이름과 주소를 화면에 표시 */}
                    {!selectedMart ? (
                        <p id="mart_name">마트를 클릭해 보세요</p> // 마커를 클릭하지 않았을 때 안내 텍스트 표시
                    ) : (
                        <p id="mart_name">{selectedMart}</p>
                    )}
                    {selectedMartAddress && (
                        <p id="mart_address">{selectedMartAddress}</p>
                    )}
                    <img
                        id="mart_check_btn"
                        src={isChecked ? "./images/checkedBtn.png" : "./images/notCheckedBtn.png"} // 클릭 시 이미지 변경
                        alt="check_button"
                        onClick={handleImageClick} // 클릭 시 이미지 변경 및 페이지 이동
                        style={{ cursor: selectedMart ? "pointer" : "not-allowed" }} // 마트를 클릭하지 않았을 때 클릭할 수 없도록 처리
                    />
                </div>
            </div>
        </div>
    );
};

export default MartMap;
