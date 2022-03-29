import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./DailyWe.module.css";

function DailyWe({ time, mintemp, maxtemp, humidity, icon }) {
    return (
        <div className={styles.daily}>
            <img
                className={styles.daily_icon}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                width="30"
                height="30"
            ></img>
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
