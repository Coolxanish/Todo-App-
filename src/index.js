import './style.css'
import { displayTaskDom, dom, completedTaskDom } from './dom.js'
//import { loadTasks, saveTasks  } from './localStorage';
const theDom = dom(); 
//const theCompletedTaskDom = completedTaskDom()
export let taskArray = []
export let completeArray = []

    function todoItems(title, description, dueDate, priority,checklist){
        const todo = {}
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.checklist = checklist;
        return todo;
    
    }
    
    function inputValues(){
         //taking submitted values from dom.js
        theDom.submitBtn.addEventListener("click", function(event){
            event.preventDefault();
            const task = todoItems(theDom.titleValue.value,theDom.descriptionValue.value,theDom.dueDateValue.value,theDom.priorityValue.value)
            taskArray.push(task)
            saveTasks()
            theDom.todoDiv.style.display = "none"
            theDom.todoBtn.style.display = "unset"
            displayTasks()
           
        })
    }
    inputValues()

    function displayTasks() {
        const task = document.querySelector(".task"); // Add a container element in your HTML to hold the task displays
    
        // Clear the existing task displays before re-populating them
        task.innerHTML = "";
        const h1 = document.createElement("h1")
        task.appendChild(h1)
        h1.textContent = "Tasks"
        
        for (let i = 0; i < taskArray.length; i++) {
            const theDisplaytaskDom = displayTaskDom();
            const currentTask = taskArray[i];
    
            theDisplaytaskDom.displayTitle.textContent = `Title: ${currentTask.title}`;
            theDisplaytaskDom.displayDescription.textContent = `Note: ${currentTask.description}`;
            theDisplaytaskDom.displayDate.textContent = `Due Date: ${currentTask.dueDate}`;
            theDisplaytaskDom.displayPriority.textContent = `Priority: ${currentTask.priority}`;
    
            if (currentTask.priority === "low") {
                theDisplaytaskDom.taskDivs.style.background = "#fdf4e7";
            } else if (currentTask.priority === "medium") {
                theDisplaytaskDom.taskDivs.style.backgroundColor = "rgb(238, 139, 114)";
            } else {
                theDisplaytaskDom.taskDivs.style.background = "#f3544c";
            }
    
            theDisplaytaskDom.removeIcon.addEventListener("click", function () {
                const index = taskArray.splice(i, 1)[0]; // Remove the clicked task from the array
                theDisplaytaskDom.taskDivs.remove();
                removeTask(index)
                displayTasks(); // Re-display the tasks after removing one
            });

            theDisplaytaskDom.completeTaskBtn.addEventListener("click", function () {
                moveTaskToCompleteArray(i);
                displayTasks(); // Refresh the task display
            });
            
            task.appendChild(theDisplaytaskDom.taskDivs); // Append the task display to the container
        }
    }
    
    function moveTaskToCompleteArray(taskIndex) {
        const completedTask = taskArray.splice(taskIndex, 1)[0];
        completeArray.push(completedTask);
        saveTasks()
        displayCompletedTasks(); // Refresh the completed task display
    }

    function displayCompletedTasks() {
        const completedTaskContainer = document.querySelector(".completedTask");
    
        // Clear the existing completed task displays before re-populating them
        completedTaskContainer.innerHTML = "";
        const h1 = document.createElement("h1");
        completedTaskContainer.appendChild(h1);
        h1.textContent = "Accomplished!";
    
        for (let i = 0; i < completeArray.length; i++) {
            const theCompletedTaskDom = completedTaskDom();
            const completedTask = completeArray[i];
    
            theCompletedTaskDom.displayTitle2.textContent = `Title: ${completedTask.title}`;
            theCompletedTaskDom.displayDescription2.textContent = `Note: ${completedTask.description}`;
            theCompletedTaskDom.displayDate2.textContent = `Date: ${completedTask.dueDate}`;
    
            completedTaskContainer.appendChild(theCompletedTaskDom.taskDivs2);
        }
    }
    
    displayCompletedTasks();  
    
    function displayTaskForm(){
        if (theDom.todoDiv.style.display === "none"){
            theDom.todoDiv.style.display = "unset"
            theDom.todoBtn.style.display = "none"
        }else {
            theDom.todoDiv.style.display = "none"
        }
        
    }
    
    
    function clickHandlers(){
        theDom.todoBtn.addEventListener("click", displayTaskForm)
    }
    clickHandlers()


    

    //localStorage 
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        localStorage.setItem('completedTasks', JSON.stringify(completeArray))
    }
    
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks')
        const savedCompletedTasks = localStorage.getItem('completedTasks')
    
        if (savedTasks) {
            taskArray = JSON.parse(savedTasks)
        }
    
        if (savedCompletedTasks) {
            completeArray =JSON.parse(savedCompletedTasks)
        }
    }

    function removeTask(index) {
        localStorage.removeItem(index);
            saveTasks(); // Save the updated taskArray back to local storage
        }
    
    document.addEventListener('DOMContentLoaded', function(){
        loadTasks();
        displayTasks();
        displayCompletedTasks()
    })



