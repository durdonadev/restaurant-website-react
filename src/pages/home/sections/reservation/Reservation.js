import React from "react";
import "./Reservation.scss";
import { Button } from "../../../../design-system/Button/Button";

import reservation from "../../../../assets/reservation.png";

class Reservation extends React.Component {
    render() {
        return (
            <section id="reservation-section">
                <div className="reservation-section__container container">
                    <figure className="reservation-section__left">
                        <img
                            src={reservation}
                            alt="People gathering for food"
                        />
                    </figure>

                    <div className="reservation-section__right">
                        <h2>
                            Let's reserve <span>a table</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Facilisis ultricies at eleifend proin. Congue
                            nibh nulla malesuada ultricies nec quam
                        </p>
                        <Button size="lg" color="orange">
                            Reservation
                        </Button>
                    </div>
                </div>
            </section>
        );
    }
}

export { Reservation };
