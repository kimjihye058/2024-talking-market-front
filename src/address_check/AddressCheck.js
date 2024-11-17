import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddressCheck.css";

const AddressCheck = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transcript = location.state?.transcript || "검색어가 없습니다."; // state로 전달된 transcript 값

    const handleNoClick = () => {
        navigate("/address"); // 주소 입력 페이지로 이동
    };

    const handleYesClick = () => {
        setTimeout(() => {
            navigate("/success");
        }, 500);
    };

    return (
        <div className="check">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div className="address">
                <p>{transcript}</p> {/* transcript 값을 여기서 출력 */}
            </div>
            <div className="checkaddress">
                <p>이 주소가 맞나요?</p>
            </div>
            <div className="button">
                <div className="noBtn" onClick={handleNoClick}>
                    <img src="/images/noBtn.png" alt="noBtn"></img>
                    <p>아니요</p>
                </div>
                <div className="yesBtn" onClick={handleYesClick}>
                    <img src="/images/yesBtn.png" alt="yesBtn"></img>
                    <p>네</p>
                </div>
            </div>
        </div>
    );
};

export default AddressCheck;
