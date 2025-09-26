import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { useMemo } from 'react';

import styles from '../../styles/modules/form.module.css';
import { StylesSelect } from './StylesSelect';

import Select from 'react-select';
import PropTypes from 'prop-types';

export const CustomSelect = ({ label, name, options, value, onChange, error, placeholder }) => {
    const isWide = useMediaQuery('(min-width: 1700px)');
    const isMedium = useMediaQuery('(min-width: 1200px) and (max-width: 1699px)');

    const breakpoint = useMemo(() => {
        if (isWide) return 'wide';
        if (isMedium) return 'medium';
        return 'small';
    }, [isWide, isMedium]);

    const customStyles = useMemo(() => StylesSelect(breakpoint), [breakpoint]);

    return (
        <div className={styles.campoPrecalificarForm}>
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
                /* menuIsOpen={true} */
                required
                styles={customStyles}
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
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};
