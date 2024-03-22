import React from 'react';
import "./reviews.scss";

function Reviews() {
  return (
    <>
        <section className="reviews">
            <div className="container justify-center align-center">
                <div className="flex rev-cont">
                    <div className="col middle-circles align-center">
                        <span className="circle c-1"></span>
                        <span className="circle c-2"></span>
                        <span className="circle c-3"></span>
                        <h5 className='col-12 justify-center'>What clients say</h5>
                    </div>
                    <div className="rev-cards p-3">
                        <div className="flex col-7 card p-2">
                            <span className="card-header"><p>“</p></span>
                            <span className="card-text">
                                <p>The team at GreenTech Solutions exceeded our expectations, 
                                    delivering high-quality solar panel installation with 
                                    professionalism and expertise.
                                </p>
                            </span>
                            <span className="card-name">
                                <p>Alice Johnson</p>
                            </span>
                        </div>
                        <div className="flex col-7 card p-2 mt-8 right">
                            <span className="card-header"><p>“</p></span>
                            <span className="card-text">
                                <p>Solutions provided us with exceptional service and helped 
                                    us transition to renewable energy seamlessly.
                                </p>
                            </span>
                            <span className="card-name">
                                <p>John Doe</p>
                            </span>
                        </div>
                        <div className="flex col-7 card p-2 ml-5 bottom">
                            <span className="card-header"><p>“</p></span>
                            <span className="card-text">
                                <p>Choosing GreenTech Solutions was one of the best decisions 
                                    we made for our business. Their commitment to sustainability 
                                    is truly commendable.
                                </p>
                            </span>
                            <span className="card-name">
                                <p>Mark Smith</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span alt="" className="rev-bg"></span>
        </section>
    </>
  )
}

export default Reviews