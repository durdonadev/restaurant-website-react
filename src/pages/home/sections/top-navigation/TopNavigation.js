import logoWhite from "../../../../assets/logo-white.svg";
import cart from "../../../../assets/cart.svg";
import "./TopNavigation.css";

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src={logoWhite} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    <li>
                        <a href="" id="navigation__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Reservation</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="./branding.html">Branding</a>
                    </li>
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cart} alt="Shopping Cart" />
                    </figure>
                    <button className="btn btn-sm btn-green">Sign In</button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
