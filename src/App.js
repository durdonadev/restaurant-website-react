import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Welcome } from "./components/Welcome/Welcome.js";
import { Menu } from "./components/Menu/Menu.js";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <Menu />
        </>
    );
}

export default App;
