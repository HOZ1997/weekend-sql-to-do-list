console.log('js');

$(document).ready (onReady);

function onReady(){
console.log ('DOM ready');
    $('#addTaskin').on('click', addTask);
    $('#markCompleteIn').on('click', markComplete );
    $('#markDeleteIn').on('click', markDelete );
  
}

function addTask (){
let taskToSend = {
  task: $('#taskInfoIn').val(),
  complete: $('#completeChecked').val()

}
console.log ('adding task - Create', taskToSend); 
} 


function markComplete (){
console.log ('mark task complete - Update', markComplete );
}

function markDelete(){
console.log ('delete task - Delete', markDelete);
}
