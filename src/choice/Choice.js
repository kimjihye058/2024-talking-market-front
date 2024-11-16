import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Choice.css";
import Select from "./Select";

const Choice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transcript = location.state?.transcript || "검색어가 없습니다."; // 전달받은 transcript 값

    const [checkedItems, setCheckedItems] = useState([false, false]);

    const handleCheckClick = (index) => {
        const newCheckedItems = checkedItems.map((item, idx) => 
            idx === index ? !item : false
        );
        setCheckedItems(newCheckedItems);
    };

    const handleProceed = () => {
        // AddressCheck로 transcript 값을 state로 전달하며 이동
        navigate("/addresscheck", { state: { transcript } });
    };

    return (
        <div className="choice_div1">
            <div className="title_div">
                <span id="title_text">주문하기</span>
            </div>
            <p id="choice_text1">"{transcript}" 검색결과</p> {/* transcript 표시 */}
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
            <button onClick={handleProceed}>주소 확인 페이지로 이동</button>
        </div>
    );
};

export default Choice;
