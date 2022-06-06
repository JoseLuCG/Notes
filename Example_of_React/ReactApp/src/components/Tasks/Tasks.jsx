import { useRef, useState } from "react";

import Task from "../Task/Task";

function Tasks ({tasksArray}) {

    const [ tasksState, setTasksState ] = useState(tasksArray);
    const newTaskContent = useRef("");

    function newTaskContentHandler (event) {
        newTaskContent.current = event.target.value;
    }

    function addTask () {
        const newTask = {
            id: Date.now(),
            content: newTaskContent.current,
            done: false,
        }
        setTasksState([newTask, ...tasksState])
    }

    function updateTask (taskId, updatedTaskObject) {
        const currentTasksArray = [ ...tasksState ];
        const taskIdx = currentTasksArray.findIndex( task => task.id === taskId );
        currentTasksArray[taskIdx] = updatedTaskObject;
        setTasksState(currentTasksArray);
        console.log("Tasks state:", currentTasksArray );
    }

    let tasksComponents = tasksState.map(
        task => <Task key={task.id} taskObject={task} updateTask={updateTask}/>
    )

    return (
        <>
            <ol>
                {tasksComponents}
            </ol>
            <input type="text" onChange={newTaskContentHandler}/>
            <button onClick={addTask}>+</button>
        </>

    )
}

export default Tasks;