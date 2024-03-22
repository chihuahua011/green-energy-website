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
					<div className="hero-text col pb-2 justify-right mb-5">
						<h1>Empowering</h1>
						<h1>Green Futures</h1>
						<h4>Harnessing the Power of Renewable Energy</h4>
					</div>
					<span className="white-rect"></span>

				</div>
            </section>
			<section className="benefits">
				<div className="container">
					<div className="col-6 img-cont p-def justify-right">
						<div className="flex justify-right align-center">
							<p className="p-def">EFFICIENCY</p>
							<p className="p-def">ENVIRONMENTAL FRIENDLINESS</p>
							<p className="p-def">CONVENIENCE</p>
						</div>
						<img alt="" className="benefits-img"></img>
					</div>
					<div className="col-6 cards-cont p-def">
						<h4 className="col-12">Benefits of Green Energy</h4>
						<span className="flex text-card">Sustainable Energy Solutions</span>
						<span className="flex text-card">Cost-Effiecient Alternatives</span>
						<span className="flex text-card">Renewable Resource Utilization</span>
						<span className="flex text-card">Energy Security</span>
						<span className="flex text-card">Reduced Carbon Emissions</span>
						<span className="flex text-card">Environmental Preservation</span>
					</div>
				</div>
			</section>
        </>
    );
}

export default Hero;
