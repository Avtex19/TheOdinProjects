import PropTypes from 'prop-types';
import styles from "./general.module.css";

export function EducationDetails({ education }) {
    return (
        <div  className={styles["education-details"]}>
            <h3>Education Information:</h3>
            <p>
                {`School Name: ${education.schoolName} | 
                Title of Study: ${education.titleOfStudy} | 
                Dates: ${education.dateOfStudy}`}
            </p>
        </div>
    );
}

EducationDetails.propTypes = {
    education: PropTypes.shape({
        schoolName: PropTypes.string,
        titleOfStudy: PropTypes.string,
        dateOfStudy: PropTypes.string
    }).isRequired
};
