import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; // axios를 사용하여 API 요청
import "./AddressCheck.css";

const AddressCheck = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transcript = location.state?.transcript || "검색어가 없습니다."; // state로 전달된 transcript 값
    const [products, setProducts] = useState([]); // 가져온 제품 데이터를 저장할 상태

    useEffect(() => {
        const orderId = localStorage.getItem("order_id"); // localStorage에서 order_id 가져오기

        if (orderId) {
            console.log("Order ID:", orderId); // order_id 출력

            // 백엔드에서 order_id로 데이터를 가져오기
            axios
                .get(`http://localhost:4000/products/order/${orderId}`) // 백엔드 URL에 맞게 수정
                .then((response) => {
                    const fetchedProducts = response.data;

                    // 가져온 데이터를 상태로 저장하거나 콘솔에 출력
                    setProducts(fetchedProducts);
                    console.log("가져온 제품 데이터:", fetchedProducts); // 데이터를 콘솔에 출력
                })
                .catch((error) => {
                    console.error("API 요청 오류:", error);
                });
        } else {
            console.warn("order_id가 없습니다. 데이터를 가져올 수 없습니다.");
        }
    }, []);

    const handleNoClick = () => {
        navigate("/address"); // 주소 입력 페이지로 이동
    };

    const handleYesClick = () => {
        setTimeout(() => {
            navigate("/success");
        }, 500);
    };

    return (
        <div className="check">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div className="address">
                <p>{transcript}</p> {/* transcript 값을 여기서 출력 */}
            </div>
            <div className="checkaddress">
                <p>이 주소가 맞나요?</p>
            </div>
            <div className="button">
                <div className="noBtn" onClick={handleNoClick}>
                    <img src="/images/noBtn.png" alt="아니요 버튼"></img>
                    <p>아니요</p>
                </div>
                <div className="yesBtn" onClick={handleYesClick}>
                    <img src="/images/yesBtn.png" alt="네 버튼"></img>
                    <p>네</p>
                </div>
            </div>
        </div>
    );
};

export default AddressCheck;
