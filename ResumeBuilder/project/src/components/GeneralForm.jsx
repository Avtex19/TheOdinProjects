import PropTypes from "prop-types";
import {FormInput} from "./FormInput.jsx";

export function GeneralForm({ inputValues, handleChange }) {
    return (
        <div className="form">
            <FormInput
                label="First Name"
                name="firstName"
                value={inputValues.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
            />
            <FormInput
                label="Last Name"
                name="lastName"
                value={inputValues.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
            />
            <FormInput
                label="Email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                placeholder="Enter email"
            />
            <FormInput
                label="Phone Number"
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
            />
        </div>
    );
}

GeneralForm.propTypes = {
    inputValues: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};
