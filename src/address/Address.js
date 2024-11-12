import React, { useState } from "react";
import "./Address.css";

const Voice = () => {
    const [isListening, setIsListening] = useState(false);

    const handleVoiceClick = () => {
        setIsListening(true);
        setTimeout(() => setIsListening(false), 1000);
    };

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div className="voice2">
                <div 
                    className={`circle1 ${isListening ? "active" : ""}`} 
                    onClick={handleVoiceClick}
                >
                    <div 
                        className={`circle ${isListening ? "active" : ""}`}
                    >
                        <img src="/images/voice.png" alt="Voice Icon" className="voice-icon" />
                    </div>
                </div>
                <span className="homevoice2">음성을 인식하고 있습니다</span>
            </div>
        </div>
    );
};

export default Voice;
