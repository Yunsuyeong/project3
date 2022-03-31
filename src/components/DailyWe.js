import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./DailyWe.module.css";

function DailyWe({
    time,
    mintemp,
    maxtemp,
    sunrise,
    sunset,
    icon,
    humidity,
    wind_speed,
}) {
    let date = new Date();
    return (
        <div className={styles.daily}>
            <p className={styles.daily_time}>
                <Link to={`/`}>{time}</Link>
            </p>
            <img
                className={styles.daily_icon}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                width="50"
                height="50"
            ></img>
            <p className={styles.daily_temp}>
                {mintemp.toFixed(1)}° / {maxtemp.toFixed(1)}°
            </p>
            <p className={styles.daily_suntime}>
                {sunrise} / {sunset}
            </p>
            <p className={styles.daily_humid}>{humidity}%</p>
            <p className={styles.daily_wind}>{wind_speed}m/s</p>
        </div>
    );
}

DailyWe.propTypes = {
    mintemp: PropTypes.number.isRequired,
    maxtemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default DailyWe;
