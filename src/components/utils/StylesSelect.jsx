export const StylesSelect = (isWide) => {
    return {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            borderRadius: '50px',
            borderColor: 'var(--white-color)',
            borderWidth: '0px',
            borderStyle: 'none',
            boxShadow: 'none',
            border: 'none',
            fontSize: isWide ? '18px' : '16px',
            padding: '0px 0px',
            maxHeight: isWide ? '38px' : '30px',
            minHeight: isWide ? '38px' : '30px',
            backgroundColor: 'var(--white-color)',
            color: 'var(--dark-color)',
            fontFamily: 'Futura-Medium',
            marginBottom: '15px',
        }),

        valueContainer: (provided) => ({
            ...provided,
            padding: '0px 10px',
            color: 'var(--dark-color)',
        }),

        placeholder: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
            marginLeft: '2px',
            marginRight: '0px',
            fontFamily: 'Futura-Medium',
            fontSize: isWide ? '18px' : '16px',
        }),

        multiValue: (provided) => ({
            ...provided,
            margin: '2px',
            paddingTop: '0',
            paddingBottom: '2px',
            color: 'var(--dark-color)',
            backgroundColor: 'red',
            borderRadius: '12px',
        }),

        multiValueLabel: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
            fontFamily: 'Futura-Medium',
            fontSize: isWide ? '18px' : '16px',
        }),

        multiValueRemove: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
        }),

        singleValue: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
            fontSize: isWide ? '18px' : '16px',
            padding: '0px 0px',
        }),

        indicatorsContainer: (provided) => ({
            ...provided,
            alignItems: 'center',
            display: 'flex',
            flexShrink: 0,
            boxSizing: 'border-box',
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: 'var(--dark-color)',
            width: '1px',
            marginTop: 0,
            marginBottom: 0,
        }),

        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0px 8px',
            color: 'var(--dark-color)',
            ':hover': { color: 'var(--orange-color)' },
        }),

        menu: (provided) => ({
            ...provided,
            top: '0',
            botton: '100%',
            backgroundColor: 'var(--white-color)',
            boxShadow: 'none',
            borderRadius: '20px 20px 15px 15px',
            marginBottom: '0px',
            marginTop: '0px',
        }),

        menuList: (provided) => ({
            ...provided,
            maxHeight: '300px',
            paddingBottom: '0px',
            paddingTop: '0px',
            borderRadius: isWide ? '20px 20px 10px 10px' : '15px 15px 10px 10px',
        }),

        option: (provided) => ({
            ...provided,
            padding: isWide ? '6px 12px' : '4px 12px',
            fontSize: isWide ? '18px' : '16px',
            cursor: 'pointer',
            fontFamily: 'Futura-Medium',
            backgroundColor: 'var(--white-color)',
            color: 'var(--dark-color)',
            ':hover': { backgroundColor: 'white' },
        }),
    };
};
