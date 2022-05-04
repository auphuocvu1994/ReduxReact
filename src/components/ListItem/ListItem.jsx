//Gọi React và useState
import React, { useState, useEffect } from "react";
// import axios from "axios"; //Sử dụng axios
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import { push } from "../../features/ListItem/_product";

const data = [
    { id: "1", "name": "Dell Vostro 5515", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/61796_laptop_dell_vostro_5515_5.jpg`, "price": 1200 },
    { id: "2", "name": "Macbook M1", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/macbook-air-m1-2020-gray-600x600.jpg`, "price": 1400 },
    { id: "3", "name": "Dell Vostro 5500", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/dell-vostro-15-5515-ryzen-5-5500u-8gb-256gb-radeon_637697851414638623.jpg`, "price": 1100 },
    { id: "4", "name": "Macbook M1 Pro", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/cac-mau-macbook-pro-m1x-moi-da-xuat-hien-trong-cac-bo-phim-quy-dinh-moi-nhat-6.jpg`, "price": 2100 }]


export default function GetListItem(props) {

    const dispatch = useDispatch()
    // trung với tên biến product ở trong store
    const { products } = useSelector(state => state.products)


    return (
        <div className="container d-flex justify-content-center mt-50 mb-50">

            <div className="row">
                {
                    data.map((obj, index) => <div className="col-md-4 mt-2" key={obj.id}>
                        <div className="card">
                            <div className="card-body" >
                                <div className="card-img-actions">
                                    <img src={obj.img} className="card-img img-fluid" width="96" height="350" alt="" />
                                </div>
                            </div>

                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="#" className="text-default mb-2" data-abc="true">{obj.name}</a>
                                    </h6>

                                    <a href="#" className="text-muted" data-abc="true">{obj.detail}</a>
                                </div>

                                <h3 className="mb-0 font-weight-semibold">$ {obj.price}</h3>

                                <div>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                </div>

                                <div className="text-muted mb-3">34 reviews</div>

                                <button onClick={() => {
                                    const action = push(obj);
                                    dispatch(action)
                                }} type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    )
}