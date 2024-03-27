import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./header.scss";

function Header() {

	useEffect(() => {
		const header = document.querySelector("section.header");

		const handleScroll = () => {
			if(window.scrollY === 0) {
				header.setAttribute("page-top", "true");
			} else {
				header.setAttribute("page-top", "false");
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, [])


    return (
        <>
            <section className="header py-2">
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
