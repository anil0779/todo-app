import React from 'react';
import './index.css';

function Filter(props) {

    const { options = [], onChange } = props;

    const handleChange = (e) => {
        const selectedTask = e && e.target && e.target.value;
        onChange && onChange(selectedTask);
    }

    return (
        <div className={'filter-container'}>
            <label htmlFor="filters">Selected project </label>
            <select id='filters' name='filter' onChange={handleChange}>
                <option></option>
                {
                    options.map((opt, idx) => {
                        return (
                            <option key={idx} value={opt}>
                                {opt}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter;