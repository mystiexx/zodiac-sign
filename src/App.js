/* eslint-disable no-mixed-operators */
import { useState, useEffect } from "react";
import "./App.css";
import dayjs from "dayjs";

const App = () => {
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const handleChange = () => {
        const month = dayjs(date).format("M");
        const d = dayjs(date).format("D");

        // eslint-disable-next-line no-mixed-operators
        if ((month === "3" && d >= "21") || (month === "4" && d <= "19")) {
            setMessage("Aries");
        } else if ((month === "4" && d >= "20") || (month === "5" && d <= "20")) {
            setMessage("Taurus");
        } else if ((month === "5" && d >= "21") || (month === "6" && d <= "20")) {
            setMessage("Gemini");
        } else if ((month === "6" && d >= "21") || (month === "7" && d <= "22")) {
            setMessage("Cancer");
        } else if ((month === "7" && d >= "23") || (month === "8" && d <= "22")) {
            setMessage("Leo");
        } else if ((month === "8" && d >= "23") || (month === "9" && d <= "22")) {
            setMessage("Virgo");
        } else if ((month === "9" && d >= "23") || (month === "10" && d <= "22")) {
            setMessage("Libra");
        } else if ((month === "10" && d >= "23") || (month === "11" && d <= "21")) {
            setMessage("Scorpio");
        } else if ((month === "11" && d >= "22") || (month === "12" && d <= "21")) {
            setMessage("Sagittarius");
        } else if ((month === "12" && d >= "22") || (month === "1" && d <= "19")) {
            setMessage("Capricorn");
        } else if ((month === "1" && d >= "20") || (month === "2" && d <= "18")) {
            setMessage("Taurus");
        } else {
            setMessage("Pisces");
        }

        setDate(" ");
    };

    const getRandomColor = () => {
        const s = "0123456789ABCDEF";
        let col = "#";
        let temp = 0;
        for (let i = 0; i < 6; ++i) {
            temp = Math.floor(Math.random() * s.length);
            col = col + s[temp];
        }
        setColor(col);
    };
    useEffect(() => {
        getRandomColor();
    }, []);
    return (
        <div className="App">
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <br />
            <button
                style={{
                    backgroundColor: `${color}`,
                    outline: "none",
                    border: "none",
                    color: "white",
                    padding: "5px",
                    marginTop: "5px",
                    borderRadius: "5px",
                }}
                onClick={handleChange}
            >
                Zodiac
            </button>
            <br />
            {message}
        </div>
    );
};

export default App;
