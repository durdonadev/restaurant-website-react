import React, { useState } from "react";
import "./TopNavigation.scss";
import { Button } from "../../../../design-system/Button/Button";

import logoWhite from "../../../../assets/logo-white.svg";
import cart from "../../../../assets/cart.svg";
import burgerIcon from "../../../../assets/menu.svg";

const links = [
    { text: "Home", link: "#" },
    { text: "Menu", link: "#" },
    { text: "About Us", link: "#" },
    { text: "Reservation", link: "#" },
    { text: "Contact Us", link: "#" }
];

const Link = (props) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    );
};

const TopNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <header className="header">
            <nav className="navigation">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    {links.map((link, idx) => (
                        <Link key={idx} link={link.link} text={link.text} />
                    ))}
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cart} alt="Shopping Cart" />
                    </figure>
                    <Button size="sm" color="green">
                        Sign In
                    </Button>
                </div>
                <img
                    onClick={toggleMenu}
                    src={burgerIcon}
                    alt="Menu"
                    id="mobile-nav-icon"
                />
            </nav>
            {showMenu && (
                <nav className="mobile-nav">
                    <ul className="navigation__links">
                        {links.map((link, idx) => (
                            <Link key={idx} link={link.link} text={link.text} />
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export { TopNavigation };
