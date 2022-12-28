import React from "react";
import "./BottomBlock.css"

export default function BottomBlock() {

    return (
        <div className="BottomBlock">
            <div className="BottomBlock__item-flex-container">
                <div className="BottomBlock__item BottomBlock__item-text">
                    Explore our <span className="item-text-color">standing desks</span>
                </div>
                <div className="BottomBlock__item">
                    <div className="LandingPage__item-img item-block item-img-block-table1">
                        <div className="item-block-flex-container">
                            <div className="item-block-discount">
                                <div className="item-block-discount-info">20%</div>
                            </div>
                            <div className="item-block-sizeTable">120x70</div>
                            <div className="item-block-sizeTable">140x70</div>
                        </div>
                    </div>
                    <div className="item-block-info">
                        <div className="block-info-flex-container">
                            <div className="block-info-flex-container-item-name">
                                One
                            </div>
                            <div className="block-info-flex-container-item-price">
                                from <span className="item-price-number">800€</span>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Integrated power management
                                </li>
                                <li>
                                    100 days free returns
                                </li>
                                <li>
                                    Two different sizes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="BottomBlock__item">
                    <div className="LandingPage__item-img item-block item-block item-img-block-table2">
                        <div className="item-block-flex-container">
                            <div className="item-block-sizeTable">120x70</div>
                            <div className="item-block-sizeTable">140x70</div>
                            <div className="item-block-sizeTable">160x70</div>
                            <div className="item-block-sizeTable">180x70</div>
                        </div>
                    </div>
                    <div className="item-block-info">
                    <div className="block-info-flex-container">
                            <div className="block-info-flex-container-item-name">
                                Pro
                            </div>
                            <div className="block-info-flex-container-item-price">
                                from <span className="item-price-number">1.200€</span>
                            </div>
                        </div>
                        <div className="">
                            <ul>
                                <li>
                                    Integrated power management
                                </li>
                                <li>
                                    100 days free returns
                                </li>
                                <li>
                                    Two different sizes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}