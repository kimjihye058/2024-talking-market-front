import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Select.css";

const API_BASE_URL = "http://localhost:4000"; // 백엔드 서버 주소

const Select = ({ product }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (product) {
            console.log("선택된 제품:", product.imageUrl); // 이미지 URL 출력
        }

        const orderId = localStorage.getItem("order_id");
        if (orderId) {
            console.log("Order ID:", orderId); // order_id
        }
    }, [product]);

    // api 호출 (post)
    const sendPostRequest = async (endpoint) => {
        if (!product) {
            alert("선택된 제품이 없습니다.");
            return;
        }

        const orderId = localStorage.getItem("order_id");
        if (!orderId) {
            alert("주문 ID를 찾을 수 없습니다.");
            return;
        }

        const requestBody = {
            name: product.name,
            price: product.price,
            count: product.count,
            order_id: orderId,
            img_url: product.imageUrl,
        };

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || "서버 응답 오류");
            }

            const result = await response.json();
            console.log("POST 성공:", result);

            if (endpoint === "/select_product") {
                alert("상품이 성공적으로 추가되었습니다!");
            }
        } catch (error) {
            console.error("POST 요청 실패:", error.message);
            alert("서버 요청 중 오류가 발생했습니다.");
        }
    };

    // 버튼
    const handleAgainClick = () => navigate("/order");
    const handleAddClick = () => {
        sendPostRequest("/select_product");
        navigate("/order"); // 추가 주문
    };
    const handleOrderClick = () => {
        sendPostRequest("/select_product");
        navigate("/choicelist")
    };

    return (
        <div className="select_div1">
            <div className="select_div2">
                <p id="select_title">선택 물품</p>
                {product ? (
                    <>
                        <p id="select_product">{product.name}</p>
                        <p id="select_count">수량 : {product.count} 개</p>
                        <p id="select_price">가격 : {product.price * product.count} 원</p>
                    </>
                ) : (
                    <p>선택된 물품이 없습니다.</p>
                )}
            </div>
            <div className="select_btn_div1">
                <div className="select_btn_div2">
                    <button id="again_btn" onClick={handleAgainClick}>
                        다시 입력하기
                    </button>
                    <button
                        id="add_btn"
                        onClick={handleAddClick}
                        disabled={!product} // 제품이 없으면 비활성화
                    >
                        추가 주문하기
                    </button>
                    <button
                        id="order_btn"
                        onClick={handleOrderClick}
                        disabled={!product} // 제품이 없으면 비활성화
                    >
                        선택완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Select;
