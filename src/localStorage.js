import { taskArray, completeArray } from "./index.js";

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    localStorage.setItem('completedTasks', JSON.stringify(completeArray))
}

export function loadTasks() {
    const savedTasks = localStorage.getItem('tasks')
    const savedCompletedTasks = localStorage.getItem('completedTasks')

    if (savedTasks) {
        taskArray = JSON.parse(savedTasks)
    }

    if (savedCompletedTasks) {
        completeArray =JSON.parse(savedCompletedTasks)
    }
}


    