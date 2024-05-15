import React from "react";
import "./Testimonials.scss";
import { testimonials } from "./data";

const Testimonial = (props) => {
    return (
        <div className="testimonials-section__testimonial">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>{props.job}</h5>
            <p>{props.text}</p>
        </div>
    );
};

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
                                    <Testimonial
                                        key={idx}
                                        name={testimonial.name}
                                        image={testimonial.image}
                                        job={testimonial.job}
                                        text={testimonial.text}
                                    />
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
