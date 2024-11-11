import React from "react";
import "./Home.css";

const Home = () => {
    
    return(
        <div className="Home1">
            <header className="header1">
                <img src="/images/logo.png" className="logo_image"/><span className="logo1">말로마트</span>
            </header>
            <div className="voice1">
                <img src="/images/voice.png" />
                <span className="homevoice">아이콘을 클릭해 주세요</span>
            </div>
        </div>
        
        
    );
}

export default Home;