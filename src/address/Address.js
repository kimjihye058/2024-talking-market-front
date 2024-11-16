import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";

const Address = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const navigate = useNavigate();

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ko-KR';
    recognition.interimResults = true;

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
            .join("");
        setTranscript(currentTranscript);

        // 최종 결과일 때 (음성 인식 종료 시) Choice.js로 이동
        if (event.results[0].isFinal) {
            setIsListening(false);
            setTimeout(() => {
                navigate("/addresscheck", { state: { transcript: currentTranscript } });
            }, 2000);
        }
    };

    recognition.onerror = (event) => {
        console.error("에러 발생:", event.error);
        setIsListening(false);
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
                    <div className={`circle ${isListening ? "active" : ""}`}>
                        <img src="/images/voice.png" alt="Voice Icon" className="voice-icon" />
                    </div>
                </div>
                <span className="homevoice2">
                    {isListening ? "음성을 인식하고 있습니다" : "음성 인식을 시작하려면 클릭하세요"}
                </span>
                <p className="transcript-display">"{transcript}"</p>
            </div>
        </div>
    );
};

export default Address;
