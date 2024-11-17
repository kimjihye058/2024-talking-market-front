// Choice.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Choice.css";
import Select from "./Select";

const Choice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transcript = location.state?.transcript; // 기본값을 빼고 수정

    const [checkedItems, setCheckedItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (transcript) {
            fetch(`http://localhost:4000/products/${encodeURIComponent(transcript)}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    setCheckedItems(new Array(data.length).fill(false));
                })
                .catch(err => console.error("제품 데이터를 가져오는 중 오류 발생:", err));
        } else {
            console.log("검색어가 없습니다.");
        }
    }, [transcript]);

    const handleCheckClick = (index) => {
        const countElement = document.querySelector(`#product_count_${index}`);
        const selectedCount = countElement ? parseInt(countElement.value, 10) : 1;
    
        const newCheckedItems = checkedItems.map((item, idx) => idx === index ? !item : false);
        setCheckedItems(newCheckedItems);
    
        if (newCheckedItems[index]) {
            const selected = {
                name: products[index].name,
                price: products[index].price,
                imageUrl: products[index].image_url,
                count: selectedCount, // 선택된 count 값으로 설정
            };
            setSelectedProduct(selected);
        } else {
            setSelectedProduct(null);
        }
    };
    

    const handleCountChange = (index, count) => {
        if (checkedItems[index]) {
            setSelectedProduct(prev => (prev ? {
                ...prev,
                count: count
            } : null));
        }
    };

    return (
        <div className="choice_div1">
            <div className="title_div">
                <span id="title_text">주문하기</span>
            </div>
            <div className="product_list">
                <p id="choice_text1">"{transcript || '검색어 없음'}" 검색결과</p>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="product_div1" key={index}>
                            <img 
                                id="product_img"
                                src={product.image_url} 
                                alt={product.name}
                            />
                            <div className="product_div2">
                                <p id="product_name">{product.name}</p>
                                <p id="product_price">가격 : {product.price}원</p>
                                <div className="product_div3">
                                <select className="product_count" id={`product_count_${index}`} name="options" onChange={(e) => {
                                    if (checkedItems[index]) {
                                        setSelectedProduct(prev => ({
                                            ...prev,
                                            count: parseInt(e.target.value, 10)
                                        }));
                                    }
                                }}>
                                    {[...Array(8).keys()].map(i => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>

                                    <span id="count_text">개</span>
                                    <img 
                                        id="check_btn" 
                                        src={checkedItems[index] ? "/images/checkedBtn.png" : "/images/notCheckedBtn.png"} 
                                        alt={checkedItems[index] ? "CheckedBtn" : "NotCheckedBtn"} 
                                        onClick={() => handleCheckClick(index)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p id="empty_text">해당 카테고리에 대한 제품이 없습니다.</p>
                )}
                <div className="empty_div"></div>
            </div>
            <Select product={selectedProduct} />
        </div>
    );
};

export default Choice;
