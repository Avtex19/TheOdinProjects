import { FormInput } from "./FormInput.jsx";
import PropTypes from "prop-types";

export function EducationForm({ inputValues, handleChange }) {
    return (
        <div className="form">
            <FormInput
                label="School Name"
                name="schoolName"
                value={inputValues.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
            />
            <FormInput
                label="Title of Study"
                name="titleOfStudy"
                value={inputValues.titleOfStudy}
                onChange={handleChange}
                placeholder="Enter title of study"
            />
            <FormInput
                label="Date of Study"
                name="dateOfStudy"
                value={inputValues.dateOfStudy}
                onChange={handleChange}
                placeholder="Enter study dates"
            />
        </div>
    );
}

EducationForm.propTypes = {
    inputValues: PropTypes.shape({
        schoolName: PropTypes.string,
        titleOfStudy: PropTypes.string,
        dateOfStudy: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};
