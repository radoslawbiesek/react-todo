import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            formText: '',
        }
    }

    handleChange(event) {
        this.setState({formText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.formText.length) return;
        this.addTodo(this.state.formText);
        this.setState({formText: ''});
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        }
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <div className={style.TodoApp__Card}>
                    <Title 
                        value={this.state.data.length} 
                    />
                    <TodoList 
                        data={this.state.data}
                        dataRemove={this.removeTodo.bind(this)} 
                    />
                    <TodoForm 
                        onSubmit={this.handleSubmit.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        value={this.state.formText}
                    />
                </div>
            </div>
        );
    }
}

export default hot(module) (App);