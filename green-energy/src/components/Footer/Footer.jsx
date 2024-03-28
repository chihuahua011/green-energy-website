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
							<Button className={"link"}><p>Services</p></Button>
							<Button className={"link"}><p>About</p></Button>
							<Button className={"link"}><p>Reviews</p></Button>
							<Button className={"link"}><p>FAQ</p></Button>
						</div>
					</div>
					<div className="flaticon"> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
				</div>
            </section>
        </>
    );
}

export default Footer;
