import React from "react";
import "./Chefs.css";
import { chefs } from "./data";
import { Button } from "../../../../design-system/Button/Button";

const Chef = (props) => {
    return (
        <div className="chefs-section__chef">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <p>{props.position}</p>
        </div>
    );
};

class Chefs extends React.Component {
    render() {
        return (
            <section id="chefs-section">
                <div className="chefs-section__container container">
                    <h2>
                        Our Greatest <span>Chefs</span>
                    </h2>
                    <div className="chefs-section__chefs">
                        {chefs.map((chef, idx) => {
                            return (
                                <Chef
                                    key={idx}
                                    name={chef.name}
                                    image={chef.image}
                                    position={chef.position}
                                />
                            );
                        })}
                    </div>
                    <Button size="lg" color="orange">
                        More
                    </Button>
                </div>
            </section>
        );
    }
}

export { Chefs };
