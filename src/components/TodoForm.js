import React from 'react';
import styles from './TodoForm.css';

const TodoForm = (props) => {
    return (
        <form 
            onSubmit={props.onSubmit}
            className={styles.TodoForm}
        >
            <input
                onChange={props.onChange}
                value={props.value}
                className={styles.TodoForm__Input}
                autoFocus
            />
            <button
                className={styles.TodoForm__Button}
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm;