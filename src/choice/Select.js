import React from "react";
import "./Select.css";

const Select = () => {
    return (
        <div className="select_div1">
            <div className="select_div2">
                <span id="select_title">선택 물품</span>
                <p id="select_product">다우니 프리미엄 세탁 세제 액체형 실내건조 2.8L</p>
                <span id="select_count">수량 :  개</span>
                <span id="select_price">가격 : 원</span>
                <div className="select_btn_div">
                    <button id="again_btn"/>
                </div>
            </div>
        </div>
    )
}

export default Select;