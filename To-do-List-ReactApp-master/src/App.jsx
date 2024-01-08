
import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="center-container">
      <div className="app-container">
        <h1 className='con'>Todo List</h1>
        <input 
          type="text" className='in1'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTask} className='button1'>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
              <button onClick={() => toggleTask(index)} className='button1'>Completed</button>
              <button onClick={() => editTask(index, prompt('Edit task:', task.text))}className='button1'>Edit</button>
              <button onClick={() => deleteTask(index)}className='button1'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
