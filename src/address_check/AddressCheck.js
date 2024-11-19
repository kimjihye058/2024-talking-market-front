import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; // Axios를 사용하여 API 요청
import "./AddressCheck.css";

const AddressCheck = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transcript = location.state?.transcript || "검색어가 없습니다."; // 전달받은 transcript 값
    const [products, setProducts] = useState([]); // 제품 데이터 저장
    const [address, setAddress] = useState("서울특별시 관악구 호암로 546"); // 임의로 설정된 주소

    useEffect(() => {
        const orderId = localStorage.getItem("order_id"); // localStorage에서 order_id 가져오기

        if (orderId) {
            console.log("Order ID:", orderId); // order_id 출력

            // 백엔드에서 order_id로 제품 데이터 가져오기
            axios
                .get(`http://localhost:4000/products/order/${orderId}`)
                .then((response) => {
                    const fetchedProducts = response.data;
                    setProducts(fetchedProducts); // 제품 데이터 저장
                    console.log("가져온 제품 데이터:", fetchedProducts); // 콘솔 출력
                })
                .catch((error) => {
                    console.error("API 요청 오류:", error);
                });
        } else {
            console.warn("order_id가 없습니다. 데이터를 가져올 수 없습니다.");
        }
    }, []);

    const handleYesClick = async () => {
        if (products.length === 0) {
            alert("주문할 제품이 없습니다.");
            return;
        }

        // names, total_price, total_count 계산
        const names = products.map((product) => product.name).join(", "); // 이름들을 문자열로 합침
        const total_price = products.reduce(
            (sum, product) => sum + product.price * product.count, // 가격 * 수량 합계
            0
        );
        const total_count = products.reduce((sum, product) => sum + product.count, 0); // 수량 합계

        // 백엔드로 주문 데이터 전송
        try {
            const response = await axios.post("http://localhost:4000/order", {
                names,
                prices: products.map((product) => product.price),
                counts: products.map((product) => product.count),
                address,
            });

            console.log("주문 성공:", response.data);

            // 주문 성공 후 페이지 이동
            setTimeout(() => {
                navigate("/success");
            }, 500);
        } catch (error) {
            console.error("주문 요청 오류:", error);
            alert("주문 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
    };

    const handleNoClick = () => {
        navigate("/address"); // 주소 입력 페이지로 이동
    };

    return (
        <div className="check">
            <header className="header2">
                <span className="logo2">주소입력</span>
            </header>
            <div className="address">
                <p>{transcript}</p> {/* transcript 값을 출력 */}
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
