import React, { useState } from "react";
import "./Order.css";

const Order = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState(""); // 실시간 인식 결과를 저장할 상태 변수
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'ko-KR';
    recognition.interimResults = true; // 중간 결과를 허용해 실시간으로 출력

    const handleVoiceClick = () => {
        if (!isListening) {
            recognition.start();
            console.log("음성 인식 시작");
        } else {
            recognition.stop();
            console.log("음성 인식 중지");
        }
        setIsListening(!isListening);
    };

    recognition.onresult = (event) => {
        const currentTranscript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join(""); // 실시간으로 텍스트 업데이트
        setTranscript(currentTranscript);
    };

    recognition.onerror = (event) => {
        console.error("에러 발생:", event.error);
        setIsListening(false);
    };

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주문하기</span>
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
                <span className="homevoice2">
                    {isListening ? "음성을 인식하고 있습니다" : "음성 인식을 시작하려면 클릭하세요"}
                </span>
                <p className="transcript-display">"{transcript}"</p> {/* 실시간 인식 결과 표시 */}
            </div>
        </div>
    );
};

export default Order;
