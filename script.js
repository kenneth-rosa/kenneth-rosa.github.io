// UI Functionalities
var current_list = [];
$(document).ready(function() {

  var list_select = false;
  
  var single_select = false;
  
  var message_single = "<div class = 'col-xs-12 col-sm-8'><input type = 'text' id = 'single_input' \
  placeholder = 'place word to add to list'> <input id = 'add'  type = 'submit' value = 'add'></div>";
  // when the button with id Single is clicked it will do the following
  var message_list = "<div class = 'col-xs-12 col-sm-12'><textarea id = 'list_input'></textarea></div>\
  <div class = col-xs-12><button id = 'add1'>add</button></div>";
  
  $("#Single").click(function() {
    //First Check if the button was clicked previously 
    if (single_select === false) {
      // if not lets set it to true and deselect the List button
      single_select = true;
      list_select = false;
      $("#Result").html('');
      // project the input area for user to enter the information
      $("#Result").html(message_single);
    } 
    // If it was already clicked we will deselect the option making a tooggle function
    else {
      //We first declare it is not selected
      single_select = false;
      //Afterwards we empty the contents inside the div with id Result
      $("#Result").html("");
    }
  });//end of event
  
  $("#List").click(function() {
    if(list_select === false){
      single_select = false;
      list_select = true;
      $('#Result').html("");
      $('#Result').html(message_list);
    }else{
      list_select = false;
      $('#Result').html("");
    }
  });// end of event
});
//Give functionality to items added after the page has loaded
//remove them when clicked
$(document).on('click','#odd',function(){
$(this).animate({'margin-left':'100000px'},200);
  var value=""+$(this).children().html()+""
  console.log(value)
  var newL = remove(value,current_list)
  current_list=newL  
});//end of event
$(document).on('click','#even',function(){
$(this).animate({'margin-left':'100000px'},100);
  var value=""+$(this).children().html()+""
  var newL = remove(value,current_list)
  current_list=newL  
});//end of event
//add buttons functionalities
$(document).on('click','#add1',function(){
  add('no',current_list);
  $('#list_input').val("");
});//end of event
$(document).on('click','#add',function(){
  add('yes',current_list);
  $('#single_input').val("")
});//end of event
//remove all functionalty
$(document).on('click','#remove-all',function(){
  $("#list-component").children().animate({'margin-left':'10000000px'},600);
  current_list=[];
});//end of event
//filter functionality
$(document).on('input','#formInput',function(){
  var newL = [];
  var capsList = []
  var inputForm = $('#formInput').val();
  var inputUppercase = inputForm.toUpperCase();
  for(i in current_list){capsList.push(current_list[i].toUpperCase());}
  
  if (inputForm) {
    for (i in current_list){
      
      if (capsList[i].indexOf(inputForm.toUpperCase()) > -1 ){newL.push(current_list[i]);}
    
    }
  newL.sort()  
  add('filter',newL);
  }else{
  add('filter',current_list);
  }
});



//constantly call the function that will check the length of the current list every 100 miliseconds
t1 = window.setInterval(function(){continiousLengthCheck(current_list)},100);