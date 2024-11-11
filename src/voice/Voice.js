import React from "react";
import "./Voice.css";

const Voice = () => {
    
    return(
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주문하기</span>
            </header>
            <div className="voice2">
                <img src="/images/voice.png" />
                <span className="homevoice2">음성을 인식하고 있습니다</span>
            </div>
        </div>
    );
}

export default Voice;