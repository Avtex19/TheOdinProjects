import PropTypes from 'prop-types';
import styles from "./general.module.css";

export function FormInput({ label, name, value, onChange, placeholder }) {
    return (
        <div className={styles["form-input-container"]}>
            <label htmlFor={name}>{label}:</label>
            <input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

