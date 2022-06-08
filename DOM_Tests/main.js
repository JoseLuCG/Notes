//add example data
const tasks = [
    {
        taskName: "Ir a por el pan",
        taskState: true
    },
    {
        taskName: "Hacer ejercicio",
        taskState: false,
    }
]

/**
 * Receives a task name and it's status and delivers them in format HTML
 * @param {string} taskName task description
 * @param {boolean} taskState task state
 * @returns the format HTML
 */
function transformDataToHtml(taskNameToTtransformInHTML, taskStateToTransformInHTML) {
    let taskStateCompleted = taskStateToTransformInHTML ? "checked" : "";
    const taskToTransform = `
    <li>
    <p>${taskNameToTtransformInHTML}</p>
    <input type="checkbox" name="completed" id="" ${taskStateCompleted}>
    </li>
    `;
    return taskToTransform;
}
//console.log(transformDataToHtml("ir de compras",true));

/**
 * 
 * @param {array} taskArray Data array to convert in HTML Text. 
 * @returns {string} Return a string in HTML with the data converted in it.
 */
function taskListInHtml (taskArray){
    let HTMLText = "";
    for (let item of taskArray) {
        HTMLText += transformDataToHtml(item.taskName, item.taskState);
    }
    return HTMLText;
}
//console.log(taskListInHtml(tasks));

/*this functions it's necesary to retard the code until the load*/ 
function loadHander() {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListInHtml(tasks);
}
window.addEventListener('load',loadHander);