import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {

    const items = props.data.map((item) => 
        <li key={item.id}>
            {item.text} 
            <span onClick={() => props.dataRemove(item.id)}> - (x)</span>
        </li>
    );

    return (
        <ul className={style.TodoList}>
            {items}
        </ul>
    )
}

export default TodoList;