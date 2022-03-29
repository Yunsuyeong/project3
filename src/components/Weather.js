import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Weather.module.css";

function Weather({ time, temp, feels_like, humidity, wind_speed, icon }) {
    return (
        <div className={styles.current}>
            <h2 className={styles.current_city}>경기도 시흥시</h2>
            <img
                className={styles.current_icon}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                width="80"
                height="80"
            ></img>
            <h2 className={styles.current_temp}>{temp.toFixed(1)}℃</h2>
            <ul className={styles.current_detail}>
                <li key={feels_like}>체감 : {feels_like.toFixed(1)}℃</li>
                <li key={humidity}>습도 : {humidity}%</li>
                <li key={wind_speed}>풍속 : {wind_speed}m/s</li>
            </ul>
        </div>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Weather;
