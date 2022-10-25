import React, {useState} from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([
    {name: "Buy Shopping", priority: "high", isComplete: true},
    {name: "Clean Bathroom", priority: "low", isComplete: false},
    {name: "Car's MOT", priority: "high", isComplete: false}
  ]);

  const [newTodo, setNewTodo] = useState("")
  const [priority, setPriority] = useState("")

  const todoNodes = todo.map((todo, index) => {
    return(
      <li key={index} className={todo.isComplete ? "complete" : "not-complete"}>
        <span>{ todo.name }, {todo.priority}: </span>
        {todo.isComplete ? <span className='complete'>Complete!</span> : <button onClick={() => completeTodo(index)}>Not Complete!</button>}
      </li>
    )
  });

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  };

  const handPrioritySelect = (event) => {
    setPriority(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodo = [...todo]
    copyTodo.push({name: newTodo, priority: priority, isComplete: false})
    setTodo(copyTodo)
    setNewTodo("")
    setPriority("")
  };


  const completeTodo = (index) => {
    const copyTodo = [...todo]
    copyTodo[index].isComplete = true;
    setTodo(copyTodo)
  };


  
  return (
    <div>
      <h1>ToDo List</h1>

      <form onSubmit={saveNewTodo}>
        <label htmlFor='newTodo'>Add an Activity:</label>
        <input type="text" id="new-todo" onChange={handleTodoInput}/>

          <label htmlFor='high'>High</label>
          <input type="radio" value="High" id="high" name="prioritySelect" onChange={handPrioritySelect} checked={priority === "high"} />

          <label htmlFor='low'>Low</label>
          <input type="radio" value="Low" id="low" name="prioritySelect" onChange={handPrioritySelect} checked={priority === "low"}/>

        <input type="submit" value="Save Activity"/>

      </form>

      <ul>
        {todoNodes}
      </ul>
        
    </div>
  );
};

export default App;
