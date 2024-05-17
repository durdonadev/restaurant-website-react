import "./TopNavigation.scss";
import { Button } from "../../../../design-system/Button/Button";

import logoWhite from "../../../../assets/logo-white.svg";
import cart from "../../../../assets/cart.svg";

const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" }
];

const Link = (props) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    );
};

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    {links.map((link, idx) => {
                        return (
                            <Link key={idx} link={link.link} text={link.text} />
                        );
                    })}
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cart} alt="Shopping Cart" />
                    </figure>

                    <Button size="sm" color="green">
                        Sign In
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
