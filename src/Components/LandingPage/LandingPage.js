import React from "react";
import TopBlock from "./TopBlock/TopBlock";
import BottomBlock from "./BottomBlock/BottomBlock";
import Carousel from "./Carousel/Carousel";

export default function LandingPage() {

    return (
        <div className="LandingPage">
            <TopBlock/>
            <BottomBlock/>
            <Carousel/>
        </div>
    )
}