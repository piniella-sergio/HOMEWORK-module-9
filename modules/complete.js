import { tasks } from "../script.js";

export function completeTask(taskName) {
  let task = tasks.find((t) => t.name === taskName);
  if (task) {
    task.status = true;
    console.log(`Задача "${taskName}" выполнена.`);
  } else {
    console.log(`Задача "${taskName}" не найдена.`);
  }
}
