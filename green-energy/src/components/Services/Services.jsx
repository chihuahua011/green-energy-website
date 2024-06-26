import React from 'react';
import "./services.scss";

function Services() {
  return (
    <>
        <section className="services">
            <div className="container p-def">
                <h4 className='col-12'>Our Services</h4>
                <div className='col service-cards justify-right'>
                    <div className="flex card m-1 p-3">
                        <span className="flex card-head mb-3">
                            <p>01</p>
                            <p>Adaptive Home</p>
                        </span>
                        <span className='card-text'>
                            <p>The Adaptive Home connects multiple technologies - solar panels, battery
                                storage, and load control - with our exclusive software and service 
                                to give you greater control over your home energy. Watch how this 
                                powerful home energy management solution works
                            </p>
                        </span>
                    </div>
                    <div className="flex card m-1 p-3">
                        <span className="flex card-head mb-3">
                            <p>02</p>
                            <p>Solar</p>
                        </span>
                        <span className='card-text'>
                            <p>Take control of your home energy costs by producing your own clean, 
                                renewable, solar energy to power your home - right from your rooftop.
                                Electricity rates can be unpredictable.
                            </p>
                        </span>
                    </div>
                    <div className='flex see-all-btn m-1 p-3 justify-center align-center'>
                        <span className='flex justify-center align-center'>
                            <p>See All</p>
                        </span>
                    </div>
                    <div className="placeholder m-1 p-3"></div>
                    <div className="flex card m-1 p-3">
                        <span className="flex card-head mb-3">
                            <p>03</p>
                            <p>Solar + Battery</p>
                        </span>
                        <span className='card-text'>
                            <p>Smart software automatically powers your home with solar energy and 
                                sends excess energy back to your utility during peak rate times 
                                to optimize savings and maximize net metering credits
                                (when on a time-of-use electricity)
                            </p>
                        </span>
                    </div>
                    <div className="flex card m-1 p-3">
                        <span className="flex card-head mb-3">
                            <p>04</p>
                            <p>Standby Generator</p>
                        </span>
                        <span className='card-text'>
                            <p>Home standby generators are now offered as a bundle, ready to provide
                                backup power to your home in the event of a power outage. Flexible 
                                financing options for standby generators and all our home energy solutions
                                and services, which also include solar, solar + storage, and more.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services