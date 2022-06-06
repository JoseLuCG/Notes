import Task from "./components/Task/Task"

import './App.css';

import mockedTasks from "./models/tasks";
import Tasks from "./components/Tasks/Tasks";

function App() {

  return (
    <>
      <h1>Mi aplicación de tareas</h1>
      <Tasks tasksArray={mockedTasks}/>
    </>
  );
}

export default App;
