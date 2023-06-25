import { useState, useEffect } from "react";
import Advice from "./Advice.jsx";
import "./normalize.css";
import "./App.css";

const url = "https://api.adviceslip.com/advice";

function App() {
    const [advice, setAdvice] = useState("");
    window.addEventListener("DOMContentLoaded", () => {
        const btn = document.querySelector(".btn");

        btn.addEventListener("click", () => {
            const fetchData = async () => {
                try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    const slip = data.slip;
                    console.log(slip);
                    setAdvice(slip);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
            console.log("hello");
        });
    });

    return (
        <>
            <main>
                <Advice {...advice} />
            </main>
        </>
    );
}

export default App;
