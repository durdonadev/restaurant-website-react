import React from "react";
import { chefs } from "./data";

import "./Chefs.css";

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
                                <div className="chefs-section__chef" key={idx}>
                                    <img src={chef.image} alt={chef.name} />
                                    <h4>{chef.name}</h4>
                                    <p>{chef.position}</p>
                                </div>
                            );
                        })}
                    </div>
                    <button className="btn btn-lg btn-orange">More</button>
                </div>
            </section>
        );
    }
}

export { Chefs };
