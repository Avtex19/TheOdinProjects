import PropTypes from 'prop-types';
import styles from './general.module.css'; // Import your CSS module

export function PersonalDetails({ person }) {
    return (
        <div className={styles["personal-details"]}>
            <h3>Personal Information:</h3>
            <p>
                <strong>Name:</strong> {`${person.firstName} ${person.lastName}`} <br />
                <strong>Email:</strong> {person.email} <br />
                <strong>Phone:</strong> {person.phoneNumber}
            </p>
        </div>
    );
}

PersonalDetails.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
    }).isRequired,
};
