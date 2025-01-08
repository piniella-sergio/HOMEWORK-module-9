import { tasks } from "../script.js";

export function addTask(taskName) {
  if (taskName.trim() === "") {
    console.log("Название задачи не может быть пустым.");
    return;
  }
  tasks.push({ name: taskName, completed: false });
  console.log(`Задача "${taskName}" добавлена.`);
}