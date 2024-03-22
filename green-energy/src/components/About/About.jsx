import React from 'react';
import "./about.scss";

function About() {
  return (
    <>
        <section className="about">
            <div className="container">
                <div className="col about-cont p-3">
                    <span className="img-1"></span>
                    <span className="img-2"></span>
                    <span className="img-3"></span>
                    <span className="flex about-text">
                        <h4 className='mt-1'>About</h4>
                        <p>Leading provider of renewable energy solutions, specializing in wind 
                            and solar power technologies. With a passion for environmental 
                            sustainability, we strive to revolutionize the energy industry by 
                            offering reliable, eco-friendly alternatives to traditional power sources.
                        </p>
                    </span>
                    <span className="img-4"></span>
                    <span className="img-5"></span>
                    <span className="img-6"></span>
                </div>
            </div>
        </section>
    </>
  )
}

export default About