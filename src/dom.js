export function dom(){
    const titleValue = document.querySelector(".title")
    const descriptionValue = document.querySelector(".description")
    const dueDateValue = document.querySelector(".dueDate")
    const priorityValue = document.querySelector(".priority")
    const submitBtn = document.querySelector(".submit")
    const todoBtn = document.querySelector(".todoBtn");
    const todoDiv = document.querySelector(".todoDiv")
    const taskDiv = document.querySelector(".task")

    return { 
        taskDiv, 
        titleValue, 
        descriptionValue, 
        dueDateValue, 
        priorityValue, 
        submitBtn, 
        todoBtn, 
        todoDiv 
    }
}

export function displayTaskDom(){
    const theDom = dom();
    const taskDivs = document.createElement("div")
    const displayTitle = document.createElement("h2")
    const displayDescription = document.createElement("p")
    const displayDate = document.createElement("p")
    const displayPriority = document.createElement("p")
    const removeIcon = document.createElement("p")
    const completeTaskBtn = document.createElement("button")
    
    
    theDom.taskDiv.appendChild(taskDivs).className = "eachTasks"
    taskDivs.appendChild(removeIcon).className = "removeIcon"
    taskDivs.appendChild(displayTitle).className = "taskTitle tasks" 
    taskDivs.appendChild(displayDescription).className = "taskNote tasks"
    taskDivs.appendChild(displayDate).className = "taskDate tasks" 
    taskDivs.appendChild(displayPriority).className = "taskPriority tasks"
    taskDivs.appendChild(completeTaskBtn).className = "transferTaskBtn"
    removeIcon.textContent = "x"
    completeTaskBtn.textContent = "Completed ?"

    return { displayTitle, 
            displayDescription, 
            displayDate, 
            displayPriority, 
            taskDivs, 
            removeIcon,
            completeTaskBtn
         }
}


export function completedTaskDom(){
    const completedTaskContainer = document.querySelector(".completedTask") 
    const taskDivs2 = document.createElement("div")
    const displayTitle2 = document.createElement("h2")
    const displayDescription2 = document.createElement("p")
    const displayDate2 = document.createElement("p")
    const displayPriority2 = document.createElement("p")

    completedTaskContainer.appendChild(taskDivs2).className = "eachCompletedTask"
    taskDivs2.appendChild(displayTitle2).className = "taskTitle2 tasks"
    taskDivs2.appendChild(displayDescription2).className = "taskNote tasks"
    taskDivs2.appendChild(displayDate2).className = "taskDate2 tasks" 
    taskDivs2.appendChild(displayPriority2).className = "taskPriority2 tasks"

    return { displayTitle2, 
            displayDescription2, 
            displayDate2, 
            displayPriority2, 
            taskDivs2, 
            completedTaskContainer
        }
}
