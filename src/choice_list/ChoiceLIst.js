import React from "react";
import "./ChoiceList.css";

const ChoiceList = () => {

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주문확인</span>
            </header>
            <div className="buttons">
                <button id="cancel_btn">취소하기</button>
                <button id="r_order_btn">주문하기</button>
            </div>
            <div className="totals">
                <p>가격 : 원</p>
                <p>총 수량 : 개</p>
            </div>
            <div className="products">

            </div>
        </div>
    );
};

export default ChoiceList;