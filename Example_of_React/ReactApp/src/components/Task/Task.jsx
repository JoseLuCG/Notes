import { useEffect, useRef, useState } from "react";

import style from "./Task.module.css";

function Task ({taskObject, updateTask}) {

    const [ done, setDone ] = useState(taskObject.done);
    const [ content, setContent] = useState(taskObject.content)

    const runningDelay = useRef();

    function updateThisTask () {
        clearTimeout(runningDelay.current);
        const newTask = {
            id: taskObject.id,
            content,
            done
        }
        console.log("Saving task", taskObject.id);
        updateTask(taskObject.id, newTask);
    }

    function delayedUpdateThisTask () {
        console.log("Programando guardado...");
        clearTimeout(runningDelay.current);
        runningDelay.current = setTimeout(updateThisTask,1500);
    }

    function changeContentHandler (ev) {
        setContent(ev.target.value);
    }

    function changeCheckboxHandler () {
        setDone( ! done );
    }

    useEffect(
        ()=>{
            delayedUpdateThisTask();
        },
        [content]
    )

    useEffect(
        ()=>{
            updateThisTask()
        },
        [done]
    )

    useEffect(
        ()=> {
            return ()=>{
                console.log("Cleaning delay on destroy.")
                clearTimeout(runningDelay);
            }
        }
    )

    return (
        <li>
            <input
                className={style.taskInput}
                type="text" 
                value={content}
                onChange={changeContentHandler}
                onBlur={updateThisTask}
            />
            <input
                type="checkbox"
                checked={done}
                onChange={changeCheckboxHandler}
                //onChange={()=>{setDone( ! done )}}
            />
        </li>
    )
}

export default Task