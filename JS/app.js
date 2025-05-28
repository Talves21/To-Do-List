let task = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let done = document.querySelector('#done');
done.style.display = 'none';

addTask.addEventListener('click', () => {
    let taskList = document.querySelector('.taskList');
    let list = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('taskList');
    taskList.appendChild(list);
    list.appendChild(input);
})

task.addEventListener('keydown', () => {
    if (Event.key === 'Enter') {
        task.disabled = true;
    }
})