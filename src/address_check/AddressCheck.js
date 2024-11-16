import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddressCheck.css";

const AddressCheck = () => {
    const navigate = useNavigate();

    const handleNoClick = () => {
        navigate("/address"); // Navigate to address.js
    };

    const handleYesClick = () => {
        navigate("/martmap"); // Navigate to mart_map.js
    };

    return (
        <div className="check">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div className="address">
                <p>수락 리버시티 1단지<br/> 102동 501호</p>
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
