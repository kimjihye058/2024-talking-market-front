import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    // 클릭 시 order_id 생성 후 localStorage에 저장
    const handleVoiceClick = () => {
        // order_id 생성 후 localStorage에 저장
        const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("order_id", orderId);
        console.log("Generated order ID:", orderId);

        setTimeout(() => {
            navigate("/order");
        }, 500);
    };

    return(
        <div className="Home1">
            <header className="header1">
                <img src="/images/logo.png" className="logo_image" alt="logo"/>
                <span className="logo1">말로마트</span>
            </header>
            <div className="voice1">
                <img 
                    src="/images/voice.png" 
                    alt="voiceIcon" 
                    onClick={handleVoiceClick} // handleVoiceClick 클릭 시 order_id 생성
                />
                <span className="homevoice1">아이콘을 클릭해 주세요</span>
            </div>
        </div>
    );
};

export default Home;
