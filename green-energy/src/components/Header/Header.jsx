import React from "react";
import Button from "../Button/Button";
import "./header.scss";

function Header() {
    return (
        <>
            <section className="header m-def">
                <div className="container p-def">
					<div className="col-6 p-def justify-right">
						<div className="col-8 justify-center align-center header-links-cont gap-4">
							<Button className={"link"}><p>Services</p></Button>
							<Button className={"link"}><p>About</p></Button>
							<Button className={"link"}><p>Reviews</p></Button>
							<Button className={"link"}><p>FAQ</p></Button>
						</div>
					</div>
                    <div className="col btn p-def justify-right">
						<Button className={"button primary"}><p>Let's talk</p></Button>
					</div>
                </div>
            </section>
        </>
    );
}

export default Header;
