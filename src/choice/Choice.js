import React from "react";
import "./Choice.css";
import Select from "./Select";

const Choice = () => {
    return (
        <div className="choice_div1">
            <div className="title_div">
                <span id="title_text">주문하기</span>
            </div>
            <p id="coice_text1">'다우니 세제' 검색결과</p>
            <div className="product_div1">
                <img 
                    id="product_img"
                    src="https://sitem.ssgcdn.com/49/94/56/item/1000051569449_i1_750.jpg" 
                    alt="다우니 프리미엄 세탁 세제"
                />
                <div className="prduct_div2">
                    <p id="product_name">다우니 프리미엄 세탁 세제 액체형 실내건조 2.8L</p>
                    <p id="product_price">가격 : 44000원</p>
                    <div className="product_div3">
                        <select id="product_count" name="options">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <span id="count_text">개</span>
                        <img id="check_btn" src="./images/notCheckedBtn.png" alt="notChekedBtn"/>
                    </div>
                </div>
            </div>
            <div className="product_div1">
                <img 
                    id="product_img"
                    src="https://sitem.ssgcdn.com/49/94/56/item/1000051569449_i1_750.jpg" 
                    alt="다우니 프리미엄 세탁 세제"
                />
                <div className="prduct_div2">
                    <p id="product_name">다우니 프리미엄 세탁 세제 액체형 실내건조 2.8L</p>
                    <p id="product_price">가격 : 44000원</p>
                    <div className="product_div3">
                        <select id="product_count" name="options">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <span id="count_text">개</span>
                        <img id="check_btn" src="./images/notCheckedBtn.png" alt="notChekedBtn"/>
                    </div>
                </div>
            </div>
            <Select />
        </div>
    );
}

export default Choice;
