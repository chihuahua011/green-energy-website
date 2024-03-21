import React from "react";
import Button from "../Button/Button";
import "./hero.scss";

function Hero() {
    return (
        <>
            <span className="backgrnd-img"></span>
            <section className="hero pt-8">
				<div className="container p-def">
					<div className="middle-cont col justify-center align-center">
						<div className="card px-7 py-2 mt-5 justify-center align-center">
							<p>Discover Sustainable Solutions</p>
							<p>for a Greener Tomorrow</p>
							<Button className={"button primary mt-2"}>Let's talk</Button>
						</div>
					</div>
					<div className="hero-text col pb-2 justify-right">
						<h1>Empowering</h1>
						<h1>Green Futures</h1>
						<h4>Harnessing the Power of Renewable Energy</h4>
					</div>
					<span className="white-rect"></span>
				</div>
            </section>
        </>
    );
}

export default Hero;
