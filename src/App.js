import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Welcome } from "./components/Welcome/Welcome.js";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
        </>
    );
}

export default App;
