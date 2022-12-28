import React, {useEffect, useState} from "react";
import User_black from "../../Image/Components/Header/Icon/User_black.svg";
import User_white from "../../Image/Components/Header/Icon/User_white.svg";
import Shopping_Cart_black from "../../Image/Components/Header/Icon/ShoppingCart_black.svg";
import Shopping_Cart_white from "../../Image/Components/Header/Icon/ShoppingCart_white.svg";
import Cross from "../../Image/Components/Header/Icon/Cross.svg"

export default function Header() {
    const [discount, setDiscount] = useState({
        discount: "Header__item-discount",
        headerHeight: "Header__item-flex-top-space",
        headerStyle: ""
    })
    const [style, setStyle] = useState({
        user: User_white,
        cart: Shopping_Cart_white,
        color: "setColorActive",
        headerStyle: "Header__item-flex-background",
        discountBorder: "items-flex-login-design-Inactive"
    })

    const changeBackground = () => {
        if (window.scrollY > 66) {
                setStyle({
                    user: User_black,
                    cart: Shopping_Cart_black,
                    color: "setColorUnactive",
                    headerStyle: "Header__item-flex-background",
                    discountBorder:"items-flex-login-design-Active" ,
                })
            } 
            else {
            setStyle({
                user: User_white,
                cart: Shopping_Cart_white,
                color: "setColorActive",
            })
        }
    }
        useEffect(() => {
            changeBackground()
            window.addEventListener("scroll", changeBackground)
        }, [])

    function clickEvent() {
        setDiscount({
            discount: "Header__item-discount__inActive",
            headerStyle: "Header__item-flex-top-space"
        });
    }

    return (
        <div className="Header">
            <div className={discount.discount}>
                <div>
                    15% de descuento en tu primer pedido
                </div>
                <div className="item-discount-info-border">
                    MYDESK
                </div>
                <div className="item-discount-cross-sign">
                    <img alt="CrossSign" className="item-discount-cross-sign-size" src={Cross} onClick={() => clickEvent()} />
                </div>
            </div>
            
            <div className={`${discount.headerHeight} ${style.headerStyle} Header__item-flex`}>
                <div className={`${style.color} Header__container`}>
                    <div className="items-flex-desk">
                        <span className="setColorActive">DESK</span>
                    </div>
                    <div className="items-flex-nav items-flex-nav-shop">
                        Shop
                    </div>
                    <div className="items-flex-nav">
                        Why Us
                    </div>
                    <div className="items-flex-nav items-flex-nav-extra-width">
                        For Companies
                    </div>
                </div>
                <div className={`${style.color} Header__container`}>
                    <div className={`${style.discountBorder} items-flex-login items-flex-login-extra-width items-flex-login-design`}>
                        Design your space
                    </div>
                    <div className="items-flex-login">
                        <img className="items-login-icon-size" alt="userLogin" src={style.user} />
                    </div>
                    <div className="items-flex-login">
                        <img className="items-login-icon-size" alt="cartCheckout" src={style.cart} />
                    </div>
                </div>
            </div>
        </div>
    )
}