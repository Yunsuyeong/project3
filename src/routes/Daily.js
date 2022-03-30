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
                            key={day.dt}
                            time={JSON.stringify(new Date(day.dt * 1000)).slice(
                                6,
                                11
                            )}
                            mintemp={day.temp.min}
                            maxtemp={day.temp.max}
                            sunrise={JSON.stringify(
                                new Date((day.sunrise + 32400) * 1000)
                            ).slice(12, 17)}
                            sunset={JSON.stringify(
                                new Date((day.sunset + 32400) * 1000)
                            ).slice(12, 17)}
                            icon={day.weather[0].icon}
                            humidity={day.humidity}
                            wind_speed={day.wind_speed}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Daily;
