import React from "react";
import starla from "../../../../assets/customer-2.png";
import james from "../../../../assets/customer-1.png";
import tosh from "../../../../assets/customer-3.png";
import "./Testimonials.css";

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials-section">
                <div className="testimonials-section__container container">
                    <div>
                        <h2>Our customers say</h2>
                        <div className="testimonials-section__testimonials">
                            <div className="testimonials-section__testimonial">
                                <img src={starla} alt="Starla" />
                                <h4>Starla Virgoun</h4>
                                <h5>Financial Adviser</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Facilisis ultricies at
                                    eleifend proin. Congue nibh nulla malesuada
                                    ultricies nec quam
                                </p>
                            </div>
                            <div className="testimonials-section__testimonial">
                                <img src={james} alt="James" />
                                <h4>James Steven</h4>
                                <h5>Uber Driver</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Facilisis ultricies at
                                    eleifend proin. Congue nibh nulla malesuada
                                    ultricies nec quam
                                </p>
                            </div>
                            <div className="testimonials-section__testimonial">
                                <img src={tosh} alt="Tosh" />
                                <h4>Tosh Mat</h4>
                                <h5>Teacher</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Facilisis ultricies at
                                    eleifend proin. Congue nibh nulla malesuada
                                    ultricies nec quam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Testimonials };
