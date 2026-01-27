import {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index === 0) return; // Can't move the first task up
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index){
        if(index === tasks.length - 1) return; // Can't move the last task down
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  return (
    <div className="ToDoList">
      <h1>To-Do List:</h1>
      <div>
        <input type="text" placeholder="Enter a task.." 
        value={newTask} onChange={handleInputChange}/>

        <button onClick={addTask}>Add Task</button>
        <button onClick={() => setTasks([])}>Clear All</button>

      </div>

      <ol>
        {tasks.map((task, index) => (
            <li key={index}>
                {task}
                <button onClick={() => moveTaskUp(index)}>↑</button>
                <button onClick={() => moveTaskDown(index)}>↓</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList