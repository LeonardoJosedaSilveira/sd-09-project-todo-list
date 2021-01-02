let clickButton = document.getElementById('criar-tarefa')
clickButton.addEventListener('click', addItem)

function addItem() {
    let taskList = document.querySelector('#lista-tarefas');    
    let task = document.createElement('li');
    let textBox = document.getElementById('texto-tarefa').value
    taskList.appendChild(task).innerText = textBox;
    document.getElementById('texto-tarefa').value = ''
}

let clickTask = document.getElementById('lista-tarefas')
clickTask.addEventListener('click', changeGray)

function changeGray(taskGray) {
    let choices = taskGray.target
    choices.style.backgroundColor = 'rgb(128, 128, 128)';
    console.log(choices)
}