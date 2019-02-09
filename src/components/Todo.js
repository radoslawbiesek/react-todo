import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
    return (
        <li className={style.Todo} >
            {props.text}
            <span className={style.Todo__Remove} onClick={props.onClick}>x</span>
        </li>
    );
}

export default Todo;