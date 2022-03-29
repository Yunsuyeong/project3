import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DailyWe from "../components/DailyWe";
import styles from "./Daily.module.css";

function Daily() {
    const [loading, setLoading] = useState(true);
    const [daily, setDaily] = useState([]);
    const getDaily = async () => {
        const json = await (
            await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=37.37731944&lon=126.8050778&exclude=minutely,alert&appid=83dfdd7a69f3e7af43787fc28dc96ad9&units=metric&lang=kr`
            )
        ).json();
        setDaily(json.daily);
        setLoading(false);
    };
    useEffect(() => {
        getDaily();
    }, []);
    return (
        <div className={styles.dailycontainer}>
            {loading ? (
                <div className={styles.dailyloader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.dailyDet}>
                    {daily.map((day) => (
                        <DailyWe
                            time={day.dt}
                            mintemp={day.temp.min}
                            maxtemp={day.temp.max}
                            humidity={day.humidity}
                            icon={day.weather[0].icon}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Daily;
