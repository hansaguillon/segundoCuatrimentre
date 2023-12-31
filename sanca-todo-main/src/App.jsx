import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";
import Input from "./components/Input";
import './App.css';
import { TbTrashOff } from "react-icons/tb";
import {getItems} from "./utils/getitems";



function App() {

  const [todos, setTodos] = useState(getItems());


  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: e.target.input.value,
      isCompleted: false
    };
    const name = e.target.input.value;
    e.target.reset();
    if(!name.trim().length) {
      alert('Solo espacios en blanco');
      
      return;
    }

    setTodos([
      ...todos,
      newTodo
    ]);
  };
  

  

  const handleStatusChange = (id) => {
    const modifiedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    setTodos([...modifiedTodos]);
  };
  const handleDeleteTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    setTodos([...remainingTodos]);
  };

  useEffect(()=> {
    window.localStorage.setItem("todo-list",JSON.stringify(todos))
},[todos])


  return (
    <main className="container">
      <header>
        <h1>Lista de tareas</h1>
      </ header>
      <Input onAdd={(e) => handleAdd(e)} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.map(todo => (
            <tr key={todo.id} className={todo.isCompleted ? "completed" : null}>
              <td>{todo.id.substring(0, 6)}</td>
              <td>{todo.title}</td>
              <td className="status" onClick={() => handleStatusChange(todo.id)}>{todo.isCompleted ? "hecho" : "pendiente"}</td>
              <td><TbTrashOff color='tomato' size={18} className='status'
                onClick={() => handleDeleteTodo(todo.id)}
              />
              </td>
            </tr>)
          )}
        </tbody>
      </table>

    </main>
  );
}

export default App;
