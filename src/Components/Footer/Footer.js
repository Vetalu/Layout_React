import React, { useRef, useState } from "react";
import "./Footer.css"

export default function Footer() {
    const check = useRef(false)
    const [email, setEmail] = useState("")
    const checkEmail = event => {
        setEmail(event.target.value)
        console.log(email)
    }

    function sendEmail() {
        if(check.current.checked == false){
            alert("Please read the privacy policy.")
        }
        if (email==""){
            alert("Please type your Email")
        }
        console.log(`Your email - ${email} and privacy policy is ${check.current.checked}`)
    }

    return (
        <div className="Footer">
            <div className="Footer__item-flex-container">
                <div className="Footer__item-info">
                    <div className="item-email">
                        <div className="item-email-text">
                            Join our newsletter
                        </div>
                        <div className="item-email-info"> <input value={email} onChange={checkEmail} type="email" placeholder="Escribe aquí tu e-mail" /><button onClick={sendEmail}>Enviar</button></div>
                        <div className="item-email-privacy"><input ref={check} type="checkbox"/> <span>He leído y acepto la <u>política de privacidad</u>.</span></div>
                    </div>
                    <div className="item-about">
                        <div className="item-about-text-bold">Shop</div>
                        <div className="item-about-text-bold">About</div>
                        <div>One</div>
                        <div>Quiénes somos</div>
                        <div>Pro</div>
                        <div>Why us</div>
                        <div>Accesorios</div>
                        <div>Contactons</div>
                        <div>FAQs</div>
                        <div>Blog</div>
                    </div>
                    <div className="item-link">
                        <div className="item-link-instagram"></div>
                        <div className="item-link-facebook"></div>
                        <div className="item-link-twitter"></div>
                        <div className="item-link-youtube"></div>
                    </div>
                </div>
                <div className="Footer__item-copyright">
                    <div>Condiciones de Uso y Contratación</div>
                    <div>Política de Cookies</div>
                    <div>Política de Privacidad</div>
                    <div className="item-copyright-copyrightInfo">Copyright ©DESK 2022</div>
                </div>
            </div>
        </div>
    )
}