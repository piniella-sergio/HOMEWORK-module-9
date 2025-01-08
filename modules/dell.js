import { tasks } from '../index.js';

export function deleteTask(taskName) {
  const initialLength = tasks.length;
  tasks.splice(0, tasks.length, ...tasks.filter((t) => t.name !== taskName));

  if (tasks.length < initialLength) {
    console.log(`Задача "${taskName}" удалена.`);
  } else {
    console.log(`Задача "${taskName}" не найдена.`);
  }
}
