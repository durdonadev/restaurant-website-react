import React from "react";
import "./Menu.css";
import menuSpaghetti from "../../assets/menu-spaghetti.png";
import menuGnocchi from "../../assets/menu-gnocchi.png";
import menuRoviolli from "../../assets/menu-rovioli.png";
import menuPenneAllVodak from "../../assets/menu-penne-alla-vodak.png";
import menuRisoto from "../../assets/menu-risoto.png";
import menuSplitza from "../../assets/menu-splitza.png";
import starFilled from "../../assets/star-filled.svg";
import starEmpty from "../../assets/star-empty.svg";

class Menu extends React.Component {
    render() {
        return (
            <section id="menu-section">
                <div className="menu-section__container container">
                    <h2>Our Popular Menu</h2>
                    <div className="menu-section__filters">
                        <button className="btn btn-lg btn-black">
                            All Catagories
                        </button>
                        <button className="btn btn-lg btn-grey">Dinner</button>
                        <button className="btn btn-lg btn-grey">Lunch</button>
                        <button className="btn btn-lg btn-grey">Dessert</button>
                        <button className="btn btn-lg btn-grey">Drinks</button>
                    </div>
                    <div className="menu-section__meals">
                        <div className="card">
                            <img
                                src={menuSpaghetti}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Spaghetti</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $11.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={menuGnocchi}
                                alt="Gnocchi"
                                className="card__img"
                            />
                            <h3 className="card__title">Gnocchi</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $14.49
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={menuRoviolli}
                                alt="Rovioli"
                                className="card__img"
                            />
                            <h3 className="card__title">Rovioli</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $8.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={menuPenneAllVodak}
                                alt="Penne-Alla-Vodak"
                                className="card__img"
                            />
                            <h3 className="card__title">Penne Alla Vodak</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $6.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={menuRisoto}
                                alt="Risoto"
                                className="card__img"
                            />
                            <h3 className="card__title">Risoto</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $9.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={menuSplitza}
                                alt="Splitza Signature"
                                className="card__img"
                            />
                            <h3 className="card__title">Splitza Signature</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                            </div>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    $17.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Menu };
