import {FormInput} from "./FormInput.jsx";
import PropTypes from "prop-types";

export function ExperienceForm({inputValues,handleChange}) {
    return (
        <div className="form">
            <FormInput
                label="Company Name"
                name="companyName"
                value={inputValues.companyName}
                onChange={handleChange}
                placeholder="Enter school name"
            />
            <FormInput
                label="Position"
                name="positionTitle"
                value={inputValues.positionTitle}
                onChange={handleChange}
                placeholder="Enter title of study"
            />
            <FormInput
                label="Main Responsibilities"
                name="mainResponsibilities"
                value={inputValues.mainResponsibilities}
                onChange={handleChange}
                placeholder="Enter study dates"
            />
            <FormInput
                label="Start Date"
                name="startDate"
                value={inputValues.startDate}
                onChange={handleChange}
                placeholder="Enter study dates"
            />
            <FormInput
                label="End Date"
                name="endDate"
                value={inputValues.endDate}
                onChange={handleChange}
                placeholder="Enter study dates"
            />
        </div>
    );
}
ExperienceForm.propTypes = {
    inputValues: PropTypes.shape({
        companyName: PropTypes.string,
        positionTitle: PropTypes.string,
        mainResponsibilities: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
}