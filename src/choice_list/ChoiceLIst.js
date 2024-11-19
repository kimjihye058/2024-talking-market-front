import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios를 사용하여 API 요청
import "./ChoiceList.css";

const ChoiceList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); // 상품 정보 상태
    const [totalPrice, setTotalPrice] = useState(0); // 총 가격 상태
    const [totalCount, setTotalCount] = useState(0); // 총 수량 상태

    // 취소 버튼 클릭
    const handleCancelClick = () => {
        navigate("/choice"); // choice.js로 이동
    };

    // 주문하기 버튼 클릭
    const handleOrderClick = () => {
        navigate("/martmap"); // martmap.js로 이동
    };

    // localStorage에서 order_id 가져오기
    const orderId = localStorage.getItem("order_id");

    useEffect(() => {
        if (orderId) {
            console.log("Order ID:", orderId); // order_id 출력

            // 백엔드 API에서 데이터를 가져옵니다.
            axios.get(`http://localhost:4000/products/order/${orderId}`) // 백엔드 서버 URL에 맞게 변경
                .then(response => {
                    const fetchedProducts = response.data;

                    // 가격과 수량 합산
                    let total = 0;
                    let count = 0;
                    
                    // products 배열을 순회하며 가격과 수량을 더함
                    fetchedProducts.forEach(product => {
                        total += product.price * product.count; // 가격 * 수량
                        count += product.count; // 수량 합산
                    });

                    setProducts(fetchedProducts); // 상품 정보 저장
                    setTotalPrice(total); // 총 가격 계산
                    setTotalCount(count); // 총 수량 계산
                })
                .catch(error => {
                    console.error("API 요청 오류:", error);
                });
        }
    }, [orderId]);

    return (
        <div className="Home2">
            <header className="header2">
                <span className="logo2">주문확인</span>
            </header>
            <div className="buttons">
                <button id="cancel_btn" onClick={handleCancelClick}>취소하기</button>
                <button id="r_order_btn" onClick={handleOrderClick}>주문하기</button>
            </div>
            <div className="totals">
                <p>가격 : {totalPrice} 원</p>
                <p>총 수량 : {totalCount} 개</p>
            </div>

            <div className="products_list">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="products1">
                            <img 
                                id="product_img"
                                src={product.img_url} // 상품 이미지 URL
                                alt={product.name} // 상품 이름을 alt 텍스트로
                            />
                            <div className="products2">
                                <p id="product_name">{product.name}</p>
                                <p id="product_price">가격 : {product.price} 원</p>
                                <div className="product_div3">
                                    <div id="product_count2">
                                        <span id="product_count2_txt">{product.count}</span> {/* count 값 */}
                                    </div>
                                    <span id="count_text">개</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>주문 내역이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default ChoiceList;
