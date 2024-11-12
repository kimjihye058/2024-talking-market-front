import React, { useState } from "react";
import "./Success.css";

const Voice = () => {
    const [isListening, setIsListening] = useState(false);

    const handleVoiceClick = () => {
        setIsListening(true);
        setTimeout(() => setIsListening(false), 1000);
    };

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

export default Voice;
