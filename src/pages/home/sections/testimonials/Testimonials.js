import React from "react";
import { testimonials } from "./data";

import "./Testimonials.css";

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials-section">
                <div className="testimonials-section__container container">
                    <div>
                        <h2>Our customers say</h2>
                        <div className="testimonials-section__testimonials">
                            {testimonials.map((testimonial, idx) => {
                                return (
                                    <div
                                        className="testimonials-section__testimonial"
                                        key={idx}
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <h4>{testimonial.name}</h4>
                                        <h5>{testimonial.job}</h5>
                                        <p>{testimonial.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Testimonials };
