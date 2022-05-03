//Gọi React và useState
import React, { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import './style.css';
import { useDispatch, useSelector } from 'react-redux'

export default function Header(props) {
    const dispatch = useDispatch()
    // trung với tên biến product ở trong store
    const { products } = useSelector(state => state.products)

    console.log(products+ "1111")

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-12 main-section">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span class="badge badge-pill badge-danger">3</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <div class="row total-header-section">
                                <div class="col-lg-6 col-sm-6 col-6">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="badge badge-pill badge-danger">3</span>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-6 total-section text-right">
                                    <p>Total: <span class="text-info">$2,978.24</span></p>
                                </div>
                            </div>
                            {/* {products.map((obj, index) => {
                                <Dropdown.Item key={index}>
                                    <div class="row cart-detail">
                                        <div class="col-lg-4 col-sm-4 col-4 cart-detail-img">
                                            <img src="https://images-na.ssl-images-amazon.com/images/I/811OyrCd5hL._SX425_.jpg" />
                                        </div>
                                        <div class="col-lg-8 col-sm-8 col-8 cart-detail-product">
                                            <p>{obj.name}</p>
                                            <span class="price text-info"> ${obj.price}</span> <button>+</button> <span class="count"> 01</span>  <button>-</button>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            })} */}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}