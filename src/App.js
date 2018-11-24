import React, {useState} from 'react'
import './App.css'

function Todo({todo, index, toggleTodo, deleteTodo}) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo" >
            {todo.text}
            <div><button onClick={() => {toggleTodo(index)}}  >action</button><button  onClick={()=> deleteTodo(index)}>delete</button></div>
        </div>
    )
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="add todo"/>
        </form>
    )
}

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Learn about react",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build todo app",
            isCompleted: false
        },
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const toggleTodo = index=> {
        todos[index].isCompleted = !todos[index].isCompleted;
        setTodos(todos);
    };

    const deleteTodo = index => {
        const newTodo = todos.filter((t,i)=> i!==index);
        setTodos(newTodo);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )

}

export default App