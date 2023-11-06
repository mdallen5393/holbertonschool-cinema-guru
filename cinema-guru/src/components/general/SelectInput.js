import './general.css';

const SelectInput = ({label, options, className, value, setValue}) => {
    handleInput = (event) => {
        setValue(event.target.value);
    }

    return (
        <div classname={`select-input-container ${className}`}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <label>
                {label}
            </label>
            <select value={value} onChange={handleSelect}>
                {options.Map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;
