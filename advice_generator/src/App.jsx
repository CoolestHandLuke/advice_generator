import { useState } from "react";
import viteLogo from "/vite.svg";
import Advice from "./Advice.jsx";
import "./normalize.css";
import "./App.css";

function App() {
    return (
        <>
            <main>
                <h5>Advice #117</h5>

                <Advice />

                <div>
                    <i className="fa-solid fa-pause pause"></i>
                </div>
                <button type="button" className="btn">
                    <i className="fa-solid fa-dice-five dice"></i>
                </button>
            </main>
        </>
    );
}

export default App;
