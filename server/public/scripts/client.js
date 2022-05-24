$(document).ready (onReady);

function onReady(){
    getTasks();
    $('#addTaskin').on('click', addTask);
    $('#taskOut').on('click', '.completeButton', markComplete );
    $('#taskOut').on('click', '.deleteButton', markDelete );
}

function addTask (){
console.log ('in addTask');    
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
//empty input
$('#taskInfoIn').val('')
}).catch (function (err){
console.log (err);
alert ('error adding item');
});
} // end add task

function getTasks(){
 console.log ('in getTask Read');
 //ajax call to server to get tasks
 $.ajax({
    method:'GET',
    url:'/tasks'
 }).then (function(response){
console.log (response);
 let el = $('#taskOut');
el.empty();
for (let i=0; i< response.length; i++){
      let completedStart =''; 
      let completedStop ='';
      if (response[i].complete){
     completedStart ='<strong>'; 
     completedStop ='</strong>';
}   
 el.append(`<li>Task: ${response[i].task} ${completedStart} Completed:${response[i].complete}${completedStop} <button class="completeButton" data-id="${response[i].id }">Complete</button><button class="deleteButton" data-id="${response[i].id }">Delete</button>
</li>`);
}
 }).catch(function(err){
     console.log(err);
     alert('error getting tasks');
 }); 
}// end getTask

function markComplete (){
console.log ('in markComplete', $(this).data('id'));
$.ajax({
    method:'PUT',
    url: '/tasks?id=' + $(this).data('id')
}).then (function(response){
console.log (response); 
getTasks();   
}).catch (function(err){
    console.log(err); 
    alert('error marking task complete'); 
});
}//end marking task complete 

function markDelete(){
console.log ('in markDelete', $(this).data('id'));
$.ajax({
    method: 'DELETE',
    url: '/tasks?id=' + $( this ).data('id')
}).then( function( response ){
    console.log( response );
    getTasks();
}).catch( function( err ){
    console.log( err );
    alert( 'error deleting item' );
});
} // end delete 

