import React from "react";
import "./Hours.scss";
import { Button } from "../../../../design-system/Button/Button";

class Hours extends React.Component {
    render() {
        return (
            <section id="hours-section">
                <div className="hours-section__container container">
                    <div className="hours-section__background">
                        <div className="hours-section__hours">
                            <h2>We are open from</h2>
                            <h3>Monday-Sunday</h3>
                            <div className="hours-section__lunch-dinner">
                                <p>Lunch : Mon-Sun : 11:00am-02:00pm</p>
                                <p>Dinner : Sunday : 04:00pm-08:00pm</p>
                                <p>04:00pm-09:00pm</p>
                            </div>
                            <Button size="lg" color="orange">
                                Order Now
                            </Button>
                            <Button size="lg" color="white">
                                Reservation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Hours };
