import React from 'react';
import './index.css';

function Task(props) {

    const { name, id } = props;

    return (
        <li className={"dropzone"} draggable={true} id={id}>
            <input type="checkbox" />
            <label>{name}</label>
        </li>
    )
}

export default Task;