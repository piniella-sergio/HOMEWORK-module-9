import { tasks } from "../script.js";

export function nocompleteTask(taskName) {
  let task = tasks.find((t) => t.name === taskName);
  if (task) {
    task.status = false;
    console.log(`Задача "${taskName}" не выполнена.`);
  } else {
    console.log(`Задача "${taskName}" не найдена.`);
  }
}
