import { addTask } from './modules/add.js';
import { completeTask } from './modules/complete.js';
import { nocompleteTask } from './modules/nocomplete.js';
import { deleteTask } from './modules/dell.js';
import { listTasks } from './modules/list.js';

export let tasks = [
  { name: 'Купить продукты', completed: false },
  { name: 'Сделать домашнее задание', completed: false },
];

let add = 'Выучить JavaScript';
let completed = 'Купить продукты';
let nocompleted = 'Купить продукты';
let del = 'Смотреть телевизор';

console.log('Список задач на день:');
listTasks();

console.log(`Добавляем новую задачу, "${add}"...`);
addTask(add);
console.log('Проверяем ввод пустой строки...');
addTask(' ');
console.log('Проверка списка задач:');
listTasks();

console.log(`Меняем статус задачи, "${completed}" на выполнена...`);
completeTask(completed);
completed = 'Выучить HTML';
console.log(`Проверяем ввод несуществующей задачи, "${completed}"...`);
completeTask(completed);
console.log('Проверка списка задач:');
listTasks();

console.log(`Меняем статус задачи, "${nocompleted}" на НЕ выполнена...`);
nocompleteTask(nocompleted);
nocompleted = 'Выучить CSS';
console.log(`Проверяем ввод несуществующей задачи, "${nocompleted}"...`);
nocompleteTask(nocompleted);
console.log('Проверка списка задач:');
listTasks();
console.log(`Пытаемся удалить несуществующую задачу, "${del}"...`);
deleteTask(del);
del = 'Сделать домашнее задание';
console.log(`Удаляем задачу, "${del}"...`);
deleteTask(del);
console.log('Проверка списка задач:');
listTasks();

console.log('Удаляем оставшиеся задачи и проверяем список на наличие задач...');
deleteTask('Купить продукты');
deleteTask('Выучить JavaScript');

listTasks();
