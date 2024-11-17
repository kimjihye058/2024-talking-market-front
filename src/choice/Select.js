import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Select.css";

const Select = ({ product }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (product) {
            console.log("선택된 제품:", product.imageUrl); // 이미지 URL 출력
        }
    }, [product]);

    const handleAgainClick = () => {
        navigate("/order");
    };

    const handleAddClick = () => {
        navigate("/order");
    };

    const handleOrderClick = () => {
        navigate("/choicelist");
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
                    <button id="again_btn" onClick={handleAgainClick}>다시 입력하기</button>
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
