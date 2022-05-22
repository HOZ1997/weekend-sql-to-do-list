
console.log('js');

$(document).ready (onReady);

function onReady(){
console.log ('DOM ready');
    $('#addTaskin').on('click', addTask);
    $('#markCompleteIn').on('click', markComplete );
    $('#markDeleteIn').on('click', markDelete );
  getTasks();
}

function addTask (){
let taskToSend = {
  task: $('#taskInfoIn').val(),
  complete: $('#completeInfoIn').val()
};
console.log ('adding task - Create', taskToSend);
$.ajax({
method: 'POST',
url: '/tasks',
data: taskToSend
}).then(function(response){
console.log ('back from POST', response); 
// - run get function if succesful
getTasks(); 
}).catch (function (err){
console.log (err);
alert ('error adding item');
});
} // end add task

function getTasks(){
 console.log ('in Get-Read tasks');
 //ajax call to server to get tasks
 $.ajax({
    method:'GET',
    url:'/tasks'
 }).then (function(response){
console.log ('back from /tasks GET', response);
let el = $('#taskOut');
el.empty();
for (let i=0; i<response.length; i++){
    el.append(`<li> ${response[i].task} ${response[i].complete}</li>`);
    }
 }).catch(function(err){
     console.log(err);
     //alert user of error
     alert('error getting tasks');
 }); 
}

function markComplete (){
console.log ('mark task complete - Update/PUT', markComplete );
}

function markDelete(){
console.log ('delete task - Delete', markDelete);
}
