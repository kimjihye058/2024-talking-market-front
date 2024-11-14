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
            <div className="products1">
                <img 
                    id="product_img"
                    src="https://sitem.ssgcdn.com/49/94/56/item/1000051569449_i1_750.jpg" 
                    alt="다우니 프리미엄 세탁 세제"
                />
                <div className="products2">
                    <p id="product_name">다우니 프리미엄 세탁 세제 액체형 실내건조 2.8L</p>
                    <p id="product_price">가격 : 44000원</p>
                    <div className="product_div3">
                        <select id="product_count" name="options">
                            {[...Array(8).keys()].map(i => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <span id="count_text">개</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoiceList;