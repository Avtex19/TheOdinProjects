import PropTypes from 'prop-types';
import styles from "./general.module.css";

export function ExperienceDetails({ experience }) {
    return (
        <div  className={styles["experience-details"]}>
            <h3>Education Information:</h3>
            <p>
                {`Company Name: ${experience.companyName} | 
                Title of Position: ${experience.positionTitle} | 
                Responsibilities: ${experience.mainResponsibilities} |
                Start Dates: ${experience.startDate} |
                EndDates: ${experience.endDate} | `}

            </p>
        </div>
    );
}

ExperienceDetails.propTypes = {
    experience: PropTypes.shape({
        companyName: PropTypes.string,
        positionTitle: PropTypes.string,
        mainResponsibilities: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }).isRequired,
}