import React from "react";
import Button from "../Button/Button";
import "./footer.scss";

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container align-center">
					<div className="col-7 logo-footer"></div>
					<div className="col-5 links-footer">
						<div className="flex col-cont justify-between pr-2">
							<Button className={"link"}>Services</Button>
							<Button className={"link"}>About</Button>
							<Button className={"link"}>Reviews</Button>
							<Button className={"link"}>FAQ</Button>
						</div>
					</div>
				</div>
            </section>
        </>
    );
}

export default Footer;
