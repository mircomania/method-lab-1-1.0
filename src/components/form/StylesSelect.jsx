export const StylesSelect = (breakpoint) => {
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
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
            padding: '0px 0px',
            maxHeight: breakpoint === 'wide' ? '38px' : breakpoint === 'medium' ? '30px' : '30px',
            minHeight: breakpoint === 'wide' ? '38px' : breakpoint === 'medium' ? '30px' : '30px',
            maxWidth: breakpoint === 'wide' ? '340px' : breakpoint === 'medium' ? '300px' : '340px',
            backgroundColor: 'var(--white-color)',
            color: 'var(--darkblue-color)',
            fontFamily: 'Futura-Medium',
            marginBottom: '15px',
        }),

        valueContainer: (provided) => ({
            ...provided,
            padding: '0px 10px',
            color: 'var(--darkblue-color)',
        }),

        placeholder: (provided) => ({
            ...provided,
            color: 'var(--darkblue-color)',
            marginLeft: '2px',
            marginRight: '0px',
            fontFamily: 'Futura-Medium',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
        }),

        multiValue: (provided) => ({
            ...provided,
            margin: '2px',
            paddingTop: '0',
            paddingBottom: '2px',
            color: 'var(--darkblue-color)',
            backgroundColor: 'red',
            borderRadius: '12px',
        }),

        multiValueLabel: (provided) => ({
            ...provided,
            color: 'var(--darkblue-color)',
            fontFamily: 'Futura-Medium',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
        }),

        multiValueRemove: (provided) => ({
            ...provided,
            color: 'var(--darkblue-color)',
        }),

        singleValue: (provided) => ({
            ...provided,
            color: 'var(--darkblue-color)',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
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
            backgroundColor: 'var(--darkblue-color)',
            width: '1px',
            marginTop: 0,
            marginBottom: 0,
        }),

        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0px 8px',
            color: 'var(--darkblue-color)',
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
            borderRadius: breakpoint === 'wide' ? '20px 20px 10px 10px' : breakpoint === 'medium' ? '15px 15px 10px 10px' : '15px 15px 10px 10px',
        }),

        option: (provided) => ({
            ...provided,
            padding: breakpoint === 'wide' ? '6px 12px' : breakpoint === 'medium' ? '4px 12px' : '4px 12px',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
            cursor: 'pointer',
            fontFamily: 'Futura-Medium',
            backgroundColor: 'var(--white-color)',
            color: 'var(--darkblue-color)',
            ':hover': { backgroundColor: 'white' },
        }),
    };
};
