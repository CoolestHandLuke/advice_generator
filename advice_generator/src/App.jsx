import { useState, useEffect } from "react";
import Advice from "./Advice.jsx";
import "./normalize.css";
import "./App.css";

const url = "https://api.adviceslip.com/advice";

function App() {
    const [advice, setAdvice] = useState("");

    const fetchData = async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            const slip = data.slip;
            setAdvice(slip);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <main>
                <Advice {...advice} fetchData={fetchData} />
            </main>
        </>
    );
}

export default App;
