import React, { useEffect } from 'react';
import Task from './../task';
import './index.css';

function TaskList(props) {

    const { list = [] } = props;

    useEffect(() => {
        let dragged;
        let id;
        let index;
        let indexDrop;
        let list;

        document.addEventListener("dragstart", ({ target }) => {
            dragged = target;
            id = target.id;
            list = target.parentNode.children;
            for (let i = 0; i < list.length; i += 1) {
                if (list[i] === dragged) {
                    index = i;
                }
            }
        });

        document.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        document.addEventListener("drop", ({ target }) => {
            if (target.className == "dropzone" && target.id !== id) {
                dragged.remove(dragged);
                for (let i = 0; i < list.length; i += 1) {
                    if (list[i] === target) {
                        indexDrop = i;
                    }
                }
                console.log(index, indexDrop);
                if (index > indexDrop) {
                    target.before(dragged);
                } else {
                    target.after(dragged);
                }
            }
        });

        return () => {
            document.removeEventListener('dragstart');
            document.removeEventListener('dragover');
            document.removeEventListener('drop');
        }
    }, [])

    return (
        <div className={'list-container'}>
            <ul className={'list'}>
                {
                    list.map((task, idx) => {
                        return <Task
                            key={idx}
                            name={task}
                            id={idx}
                        />
                    })
                }
            </ul>
        </div>
    )
}
export default TaskList;