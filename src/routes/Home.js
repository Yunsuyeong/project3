import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Weather from "../components/Weather";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState([]);
    const getCurrent = async () => {
        const json = await (
            await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=37.37731944&lon=126.8050778&exclude=minutely,alert&appid=83dfdd7a69f3e7af43787fc28dc96ad9&units=metric&lang=kr`
            )
        ).json();
        setCurrent(json.current);
        setLoading(false);
    };
    useEffect(() => {
        getCurrent();
    }, []);
    return (
        <div className={styles.homecontainer}>
            {loading ? (
                <div className={styles.homeloader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.weatherDet}>
                    <Weather
                        time={current.dt}
                        feels_like={current.feels_like}
                        temp={current.temp}
                        humidity={current.humidity}
                        wind_speed={current.wind_speed}
                        icon={current.weather[0].icon}
                    />
                </div>
            )}
        </div>
    );
}

export default Home;
