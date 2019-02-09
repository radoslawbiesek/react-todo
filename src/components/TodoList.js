import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {

    const todos = props.data.map((todo) => 
        <Todo 
            key={todo.id}
            onClick={() => props.dataRemove(todo.id)}
            text={todo.text}
        />
    );

    return (
        <ul className={style.TodoList}>
            {todos}
        </ul>
    )
}

export default TodoList;