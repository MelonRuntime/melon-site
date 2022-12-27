import { useEffect } from "react";
import { Navbar } from "../../elements/Navbar/Navbar";
import "./Main.css";
import helloWorld from "../../assets/hello-world.png";

const Main = () => {
    useEffect(() => {
        document.title = 'Melon Runtime';
    }, []);

    return (
        <>
            <header>
                <Navbar pageNumber={1} />
                
            </header>
            <main id="main-home">
                <h1>MELON</h1>
                <h2>
                    Fast, modern and functional .NET JavaScript runtime.
                </h2>
                <img src={helloWorld} />
                <div id="main-home-buttons">
                    <button>
                        ► Try it yourself
                    </button>
                    <button>
                        ► Getting Started
                    </button>
                </div>
            </main>
        </>
    )
}

export { Main }