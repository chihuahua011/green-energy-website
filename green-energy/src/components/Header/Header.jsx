import React from "react";
import Button from "../Button/Button";
import "./header.scss";

function Header() {
    return (
        <>
            <section className="header m-def">
                <div className="container p-def">
					<div className="col-6 p-def justify-right">
						<div className="col-8 justify-center header-links-cont gap-4">
							<Button className={"link"}>Services</Button>
							<Button className={"link"}>About</Button>
							<Button className={"link"}>Reviews</Button>
							<Button className={"link"}>FAQ</Button>
						</div>
					</div>
                    <div className="col btn p-def justify-right">
						<Button className={"button primary"}>Let's talk</Button>
					</div>
                </div>
            </section>
        </>
    );
}

export default Header;
