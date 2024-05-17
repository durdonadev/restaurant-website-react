import React from "react";
import logo_dark from "../../../../assets/logo-dark.svg";
import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";
import "./Footer.scss";
import { pageLinks, informationLinks, contactLinks } from "./data";

const Link = (props) => {
    return (
        <a href={props.link} className="footer__text">
            {props.text}
        </a>
    );
};

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer__container container">
                    <div className="footer__content">
                        <div className="footer__brand">
                            <img
                                src={logo_dark}
                                alt=""
                                className="footer__logo"
                            />
                            <p className="footer__text">
                                Viverra gravida morbi egestas facilisis tortor
                                netus non duis tempor.
                            </p>
                            <div className="footer__social-icons">
                                <img src={twitter} alt="Twitter" />
                                <img src={instagram} alt="Instagram" />
                                <img src={facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div className="footer__pages">
                            <h4 className="footer__heading">Page</h4>
                            {pageLinks.map((link, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        link={link.link}
                                        text={link.text}
                                    />
                                );
                            })}
                        </div>
                        <div className="footer__about">
                            <h4 className="footer__heading">Information</h4>
                            {informationLinks.map((link, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        link={link.link}
                                        text={link.text}
                                    />
                                );
                            })}
                        </div>
                        <div className="footer__contact">
                            <h4 className="footer__heading">Get In Touch</h4>
                            <p className="footer__text">
                                3247 Johnson Ave, <br />
                                Bronx, NY 10463
                            </p>
                            {contactLinks.map((link, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        link={link.link}
                                        text={link.text}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <p className="footer__text text-center">
                        Copyright &copy; 2023 Delizioso
                    </p>
                </div>
            </footer>
        );
    }
}

export { Footer };
