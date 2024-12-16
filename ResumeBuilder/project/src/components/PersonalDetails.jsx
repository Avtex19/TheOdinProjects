import PropTypes from 'prop-types';

export function PersonalDetails({ person }) {
    return (
        <div>
            <h3>Personal Information:</h3>
            <p>
                {`Name: ${person.firstName} ${person.lastName} | 
                Email: ${person.email} | 
                Phone: ${person.phoneNumber}`}
            </p>
        </div>
    );
}

PersonalDetails.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string
    }).isRequired
};
