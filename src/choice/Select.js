import React from "react";
import { useNavigate } from "react-router-dom";
import "./Select.css";

const Select = () => {
    const navigate = useNavigate();

    const handleAgainClick = () => {
        navigate("/order"); // Navigate to order.js
    };

    const handleAddClick = () => {
        navigate("/order"); // Navigate to order.js
    };

    const handleOrderClick = () => {
        navigate("/choicelist"); // Navigate to choicelist.js
    };

    return (
        <div className="select_div1">
            <div className="select_div2">
                <span id="select_title">선택 물품</span>
                <p id="select_product">다우니 프리미엄 세탁 세제 액체형 실내건조 2.8L</p>
                <p id="select_count">수량 :  개</p>
                <p id="select_price">가격 : 원</p>
            </div>
            <div className="select_btn_div1">
                <div className="select_btn_div2">
                    <button id="again_btn" onClick={handleAgainClick}>다시 입력하기</button>
                    <button id="add_btn" onClick={handleAddClick}>추가 주문하기</button>
                    <button id="order_btn" onClick={handleOrderClick}>선택완료</button>
                </div>
            </div>
        </div>
    )
}

export default Select;