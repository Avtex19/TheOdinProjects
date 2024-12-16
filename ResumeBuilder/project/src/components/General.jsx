import { useState } from "react";
import { GeneralForm } from "./GeneralForm.jsx";
import { EducationForm } from "./EducationForm.jsx";
import { PersonalDetails } from "./PersonalDetails.jsx";
import {EducationDetails} from "./EducationDetails.jsx";

export function General() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const [education, setEducation] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
    });

    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
    });

    const [showDetails, setShowDetails] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setPerson(prevPerson => ({
            firstName: inputValues.firstName || prevPerson.firstName,
            lastName: inputValues.lastName || prevPerson.lastName,
            email: inputValues.email || prevPerson.email,
            phoneNumber: inputValues.phoneNumber || prevPerson.phoneNumber
        }));

        setEducation({
            schoolName: inputValues.schoolName || education.schoolName,
            titleOfStudy: inputValues.titleOfStudy || education.titleOfStudy,
            dateOfStudy: inputValues.dateOfStudy || education.dateOfStudy
        });

        setShowDetails(true);

        setInputValues({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: ''
        });
    };

    return (
        <div className="general-container">
            <div>
                <h2>General Information</h2>
                <GeneralForm
                    inputValues={inputValues}
                    handleChange={handleChange}
                />

                <h2>Education Information</h2>
                <EducationForm
                    inputValues={inputValues}
                    handleChange={handleChange}
                />

                <button
                    onClick={handleSubmit}
                    className="submit-button"
                >
                    Submit
                </button>
            </div>

            {showDetails && (
                <>
                    <PersonalDetails person={person} />
                    <EducationDetails education={education} />
                </>
            )}
        </div>
    );
}
