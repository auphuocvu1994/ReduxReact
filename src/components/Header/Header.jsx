//Gọi React và useState
import React, { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from "../../features/ListItem/_product";
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {

    const dispatch = useDispatch()
    // trung với tên biến product ở trong store
    const { product } = useSelector(state => state.products)

    console.log(JSON.stringify(product))

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 main-section">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span className="badge badge-pill badge-danger">{product.length}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <div className="row total-header-section">
                                <div className="col-lg-6 col-sm-6 col-6">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="badge badge-pill badge-danger">{product.length}</span>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6 total-section">
                                    <p className="text-right">Total: <span className="text-info">$ {Object.values(product).reduce((r, { price }) => r + price, 0)}</span></p>
                                </div>
                            </div>
                            {product.map((obj, index) => {
                                return <Dropdown.Item key={obj.id}>
                                    <div className="row cart-detail" onClick={(e) => { e.stopPropagation(); }}>
                                        <div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
                                            <img src={obj.img} />
                                        </div>
                                        <div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
                                            <p>{obj.name}</p>
                                            <div className="cart-detail-product-infor">
                                                <span className="price text-info"> ${obj.price}</span>
                                                <p><button className="cart-btn-up">+</button> <span className="count"> {obj.quantity}</span>  <button className="cart-btn-down">-</button></p>
                                                <i className="fa fa-trash" onClick={() => {
                                                    const action = remove(obj);
                                                    dispatch(action)
                                                }}></i>
                                            </div>

                                        </div>
                                    </div>
                                </Dropdown.Item>

                            })}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}