import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Welcome } from "./components/Welcome/Welcome.js";
import { Menu } from "./components/Menu/Menu.js";
import { Reservation } from "./components/Reservation/Reservation.js";
import { Chefs } from "./components/Chefs/Chefs.js";
import { Testimonials } from "./components/Testimonials/Testimonials.js";
import { Hours } from "./components/Hours/Hours.js";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <Menu />
            <Reservation />
            <Chefs />
            <Testimonials />
            <Hours />
        </>
    );
}

export default App;
