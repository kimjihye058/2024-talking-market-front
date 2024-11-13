import React, { useState } from "react";
import "./Choice.css";
import Select from "./Select";

const Choice = () => {
    // 제품마다 개별 상태를 관리하는 배열
    const [checkedItems, setCheckedItems] = useState([false, false]); // 각 제품마다 초기값 false

    const handleCheckClick = (index) => {
        // 현재 클릭된 버튼이 이미 선택된 상태인지 확인
        const newCheckedItems = checkedItems.map((item, idx) => 
            idx === index ? !item : false // 클릭된 버튼은 토글, 나머지는 false
        );
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className="choice_div1">
            <div className="title_div">
                <span id="title_text">주문하기</span>
            </div>
            <p id="choice_text1">'다우니 세제' 검색결과</p>
            {[0, 1].map((index) => (
                <div className="product_div1" key={index}>
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
                                {[...Array(8).keys()].map(i => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <span id="count_text">개</span>
                            <img 
                                id="check_btn" 
                                src={checkedItems[index] ? "./images/checkedBtn.png" : "./images/notCheckedBtn.png"} 
                                alt={checkedItems[index] ? "CheckedBtn" : "NotCheckedBtn"} 
                                onClick={() => handleCheckClick(index)}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <Select />
        </div>
    );
}

export default Choice;
