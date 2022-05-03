//Gọi React và useState
import React, { useState, useEffect } from "react";
// import axios from "axios"; //Sử dụng axios
import './style.css';

const data = [
    { id: "1", "name": "Dell Vostro 5515", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/61796_laptop_dell_vostro_5515_5.jpg`, "price": 1200 },
    { id: "2", "name": "Macbook M1", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/macbook-air-m1-2020-gray-600x600.jpg`, "price": 1400 },
    { id: "3", "name": "Dell Vostro 5500", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/dell-vostro-15-5515-ryzen-5-5500u-8gb-256gb-radeon_637697851414638623.jpg`, "price": 1100 },
    { id: "4", "name": "Macbook M1 Pro", "detail": "Laptops & Notebooks", "img": `${process.env.PUBLIC_URL}/image/cac-mau-macbook-pro-m1x-moi-da-xuat-hien-trong-cac-bo-phim-quy-dinh-moi-nhat-6.jpg`, "price": 2100 }]


export default function GetListItem(props) {

    return (
        <div class="container d-flex justify-content-center mt-50 mb-50">

            <div class="row">
                {
                    data.map((obj, index) => <div class="col-md-4 mt-2">
                        <div class="card" key={index}>
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" class="card-img img-fluid" width="96" height="350" alt="" />
                                </div>
                            </div>

                            <div class="card-body bg-light text-center">
                                <div class="mb-2">
                                    <h6 class="font-weight-semibold mb-2">
                                        <a href="#" class="text-default mb-2" data-abc="true">{obj.name}</a>
                                    </h6>

                                    <a href="#" class="text-muted" data-abc="true">{obj.detail}</a>
                                </div>

                                <h3 class="mb-0 font-weight-semibold">$ {obj.price}</h3>

                                <div>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                </div>

                                <div class="text-muted mb-3">34 reviews</div>

                                <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    )
}