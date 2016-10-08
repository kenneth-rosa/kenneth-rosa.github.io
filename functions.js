
// Core Algorithms and functions that will be implemented in the UI functionalities 
function add(single,list){
  //add Single, List, sorted List, or a list after having an item removed
  function addToHtml () {
      for (i in list){
    if(i%2===0){
    $("#list-component").append("<div id = 'even'> <h4>"+list[i]+"</h4></div>");
  }else{
    $("#list-component").append("<div id = 'odd' ><h4>"+list[i]+"</h4></div>");
      } //end of else
    }//end of for loop
  }//end of addToHtml function 
  var userInput  = ""
  if (single==="yes"){
  	//Agarramis el input
    $("#single_input").html("")
    userInput = $("#single_input").val()
  	if(userInput.length > 0){
    //Insertalo a la lista
  	list.push(userInput);
    list.sort(function(a,b){
          a = a.toLowerCase();
          b = b.toLowerCase();
          if( a == b) return 0;
          return a < b ? -1 : 1;
      });
    //borra lo anterior 
    $("#list-component").html("")
  //inserta cada elemento aL arbol de HTML
    addToHtml()
    
    } else{ 
	alert("No value inputed")
	} 
  }else if(single==="no"){
  	//if whole list is inputed
    userInput= $("#list_input").val()
    if(userInput.length>0){
      var newL = userInput.split(',');
      for (i in newL){
        list.push(newL[i]);
      }
      list.sort(function(a,b){
          a = a.toLowerCase();
          b = b.toLowerCase();
          if( a == b) return 0;
          return a < b ? -1 : 1;
      })
      addToHtml();
    }else{
      alert("No value typed");
    }
  }else if(single==='filter'){
    $("#list-component").html("");
    addToHtml();
  }
}
//remove algorithm
function remove(value,list){
 var newL = []
 var counter=0;
 for(i in list){ 
  if(counter<1 && value === list[i]){
    counter++;
    continue;
  }
  else{
    newL.push(list[i]);
  }
  }
 return newL
 }
 //Function that will be constantly called to check for the length of the list 
 var counter_check = 0;
 function continiousLengthCheck(list){  
    var filterForm = "<form id = 'filterForm' action = '#'>      \
                        <label for = 'filterInput'>Filter:</label>\
                        <input type ='text' name = 'filterInput' id='formInput' /> \
                      </form> "
    if(list.length===0){
      $('#remove-all-button').html("")
      $('#filter').html("");
      counter_check = 0;
    }else if(list.length>=1){
      if(counter_check===0){
        counter_check++;
        $('#filter').append(filterForm);
        $('#remove-all-button').append("<button id = 'remove-all'>Remove All</button>")
      }
    }
 }
