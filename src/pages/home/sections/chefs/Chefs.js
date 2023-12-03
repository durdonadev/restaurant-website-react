import React from "react";
import ferry from "../../../../assets/ferry.png";
import iswan from "../../../../assets/iswan.png";
import betran from "../../../../assets/betran.png";
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
                        <div className="chefs-section__chef">
                            <img src={betran} alt="Betran Chef" />
                            <h4>Betrann Komar</h4>
                            <p>Head Chef</p>
                        </div>

                        <div className="chefs-section__chef">
                            <img src={ferry} alt="Ferry Chef" />
                            <h4>Ferry Sauwi</h4>
                            <p>Chef</p>
                        </div>

                        <div className="chefs-section__chef">
                            <img src={iswan} alt="Iswan Chef" />
                            <h4>Iswan Dracho</h4>
                            <p>Chef</p>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-orange">More</button>
                </div>
            </section>
        );
    }
}

export { Chefs };
