import React from "react";
import "./Success.css";

const Success = () => {

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주문완료</span>
            </header>
            <div className="voice2">
                <img src="/images/success.png" alt="success" className="voice-icon" />
                <p className="homevoice3" align="center">주문이 정상적으로<br/>처리되었습니다.</p>
            </div>
        </div>
    );
};

export default Success;