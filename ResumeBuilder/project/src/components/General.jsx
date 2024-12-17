import { useState } from "react";
import { GeneralForm } from "./GeneralForm.jsx";
import { EducationForm } from "./EducationForm.jsx";
import { PersonalDetails } from "./PersonalDetails.jsx";
import {EducationDetails} from "./EducationDetails.jsx";
import {ExperienceForm} from "./ExperienceForm.jsx";
import {ExperienceDetails} from "./ExperienceDetails.jsx";
import './general.module.css'
import styles from "./general.module.css";

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
    const [experience, setExperience] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        startDate: '',
        endDate: '',
    });

    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        startDate: '',
        endDate: '',
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

        setExperience({
            companyName: inputValues.companyName || experience.companyName,
            positionTitle: inputValues.positionTitle || experience.companyName,
            mainResponsibilities: experience.mainResponsibilities,
            startDate: inputValues.startDate || experience.startDate,
            endDate: inputValues.endDate || experience.endDate,

        })

        setShowDetails(true);

        setInputValues({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: '',
            companyName: '',
            positionTitle: '',
            mainResponsibilities: '',
            startDate: '',
            endDate: '',
        });
    };

    return (
        <div className={styles["general-container"]}>
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
                <h2>Work Experience</h2>
                <ExperienceForm
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
                <div className={styles["results-container"]}>
                    <PersonalDetails person={person}/>
                    <EducationDetails education={education}/>
                    <ExperienceDetails experience={experience}/>
                </div>
            )}
        </div>
    );
}
