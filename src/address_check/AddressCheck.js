import React from "react";
import "./AddressCheck.css";

const AddressCheck = () => {

    return (
        <div className="check">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div>
                <p>수락 리버시티 1단지 102동 501호</p>
            </div>
            <div>
                <p>이 주소가 맞나요?</p>
            </div>
            <div>
                <div>
                    <img src="/images/noBtn.png"></img>
                    <p>아니요</p>
                </div>
                <div>
                    <img src="/images/yesBtn.png"></img>
                    <p>네</p>
                </div>
            </div>
        </div>
    );
};

export default AddressCheck;
