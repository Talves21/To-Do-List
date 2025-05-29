let task = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let complete = document.querySelector('#complete');
let restart = document.querySelector('#restart');


addTask.addEventListener('click', () => {
    let taskList = document.querySelector('.taskList');
    let list = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute('type', 'text',);
    input.setAttribute('placeholder', 'Enter a Task')
    taskList.appendChild(list);
    list.appendChild(input);

    let addComplete = document.createElement('button');
    addComplete.classList.add('ms-3');
    addComplete.innerText ='Completed';
    list.appendChild(addComplete);

    addComplete.addEventListener('click', () => {
        input.disabled = true;
        addComplete.style.display = 'none';
    })

    restart.addEventListener('click', () => {
        list.remove();
    })
})

complete.addEventListener('click', () => {
    task.disabled = true;
    complete.style.display = 'none';
})

edit.addEventListener('click', () => {
    complete.style.display = 'inline';
    task.disabled = false;
})

restart.addEventListener('click', () => {
        task.disabled = false;
        complete.style.display = 'inline';
})