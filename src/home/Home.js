import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    // 클릭 시 order 페이지로 이동하는 함수
    const handleVoiceClick = () => {
        navigate("/order");
    };
    
    return(
        <div className="Home1">
            <header className="header1">
                <img src="/images/logo.png" className="logo_image"/><span className="logo1">말로마트</span>
            </header>
            <div className="voice1">
                <img src="/images/voice.png" onClick={handleVoiceClick} />
                <span className="homevoice1">아이콘을 클릭해 주세요</span>
            </div>
        </div>
        
        
    );
}

export default Home;