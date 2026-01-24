import styles from '../../styles/modules/form.module.css';
import { StylesSelect } from './StylesSelect';

import Select from 'react-select';
import PropTypes from 'prop-types';

export const CustomSelect = ({ label, name, options, value, onChange, error, placeholder }) => {
    return (
        <div className={`${styles.inputContainer}  select-scope`}>
            <label htmlFor={name} className={`light-text ${error ? styles.labelError : ''}`}>
                {label}
            </label>

            <Select
                options={options}
                value={options.find((opt) => opt.value === value) || null}
                onChange={(selected) => onChange(name, selected?.value || '')}
                placeholder={placeholder}
                aria-invalid={!!error}
                isSearchable={false}
                inputId={name}
                /* menuIsOpen={true} */
                required
                styles={StylesSelect}
            />
        </div>
    );
};

CustomSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};
