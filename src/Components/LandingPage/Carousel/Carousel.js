import React, {useState, useEffect} from "react";
import Adidas_logo from "../../../Image/Components/LandingPage/Carousel/Adidas_logo.svg"
import CC_logo from "../../../Image/Components/LandingPage/Carousel/CC_logo.svg"
import Vogue_logo from "../../../Image/Components/LandingPage/Carousel/Vogue_logo.svg"
import SW_logo from "../../../Image/Components/LandingPage/Carousel/SW_logo.svg"
import Gucci_logo from "../../../Image/Components/LandingPage/Carousel/Gucci_logo.svg"
import Premier_League_logo from "../../../Image/Components/LandingPage/Carousel/Premier_League_logo.svg"
import Meta_logo from "../../../Image/Components/LandingPage/Carousel/Meta_logo.svg"
import Apple_logo from "../../../Image/Components/LandingPage/Carousel/Apple_logo.svg"
import "./Carousel.css"

export default function Carousel() {
    const[description, setDescription] = useState("“Habitasse tellus aliquet aliquam a morbi. Et pulvinar urna venenatis duis quam.”")
    const pageWidth = document.documentElement.scrollWidth
    console.log(pageWidth)
    const [slider, setSlider] = useState([
        {
        img: Adidas_logo,
        text: "adidas is a good sport clothes",
        id: "Adidas",
        alt: "Brand_Adidas"
        },
        {
        img: CC_logo,
        text: "Coca-cola is delicious",
        id: "Cola",
        alt: "Brand_Cola",
        }, 
        {
        img: Vogue_logo,
        text: "Vogue is very pretty clothes",
        id: "Vogue",
        alt: "Brand_Vogue",
        },
        {
        img: SW_logo,
        text: "Star Wars is a good story from Lucasfilm",
        id: "Star",
        alt: "Brand_StarWars",
        },
        {
        img: Gucci_logo,
        text: "Gucci is very popular brand",
        id: "Gucci",
        alt: "Brand_Gucci",
        },
        {
        img: Premier_League_logo,
        text: "Premier League is the strongest football league in world",
        id: "Football",
        alt: "Brand_PLFootball",
        },
        {
        img: Meta_logo,
        text: "Meta created Facebook",
        id: "Meta",
        alt: "Brand_Meta",
        },
        {
        img: Apple_logo,
        text: "Everyone love apple's",
        id: "Apple",
        alt: "Brand_Apple",
        },
    ]);
    function CarouselMove() {
            const change = slider[0]
            if (slider.length>8) {
                slider.shift()
                slider.pop()
            }
            // This if was created to fix useEffect double compiling problem
            setSlider(slider => [...slider, change])
    }

    useEffect(() => {
        setTimeout(() => {
            CarouselMove()
        }, 1000)
    }, [slider]);

    const showText = event => {
        const idDiv = event.currentTarget.id;
        const findArray = slider.filter(e => e.id === idDiv)
        setDescription(findArray[0].text)
    }

    return (
        <div className="Carousel">
            <div className="Carousel__item-flex-container">
                <div className="item-flex-block item-title-text">
                    Hablan de nosotros en
                </div>
                <div className="item-flex-block item-brand-text">
                    {description}
                </div> 
                <div id="asdf" className="item-flex-block">
                    <div id={slider[0].id} onClick={showText} className="item-carousel"><img alt={slider[0].alt}  src={slider[0].img}/></div>
                    <div id={slider[1].id} onClick={showText} className="item-carousel"><img alt={slider[1].alt}  src={slider[1].img}/></div>
                    <div id={slider[2].id} onClick={showText} className="item-carousel"><img alt={slider[2].alt}  src={slider[2].img}/></div>
                    <div id={slider[3].id} onClick={showText} className="item-carousel"><img alt={slider[3].alt}  src={slider[3].img}/></div>
                    <div id={slider[4].id} onClick={showText} className="item-carousel"><img alt={slider[4].alt}  src={slider[4].img}/></div>
                    <div id={slider[5].id} onClick={showText} className="item-carousel"><img alt={slider[5].alt}  src={slider[5].img}/></div>
                    <div id={slider[6].id} onClick={showText} className="item-carousel"><img alt={slider[6].alt}  src={slider[6].img}/></div>
                    <div id={slider[7].id} onClick={showText} className="item-carousel"><img alt={slider[7].alt}  src={slider[7].img}/></div>
                </div>
            </div>
        </div>
    )
}