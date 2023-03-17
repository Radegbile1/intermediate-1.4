// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    Some further requirements:
    - the input field must be reset when the add button is clicked on 
    - the todo list must show the most recent first
 */
  // let todoList = [];
  let addtoButton = document.getElementById("add-button");
  let tasktobeInputted = document.getElementById("todoTask");
  let inputField = document.getElementById("new-task");

  addtoButton.addEventListener('click', addItem);
function addItem(){
  var createList = document.createElement('div')
  createList.classList.add('stylingBtn')
  var btn = document.createElement('button');
  btn.innerText = "delete";
  var createNew = document.createElement('li');
  createList.appendChild(createNew);
  createList.appendChild(btn);
  createNew.innerText = inputField.value;
  tasktobeInputted.appendChild(createList);
  inputField.value = "";


}
let deletion = document.getElementsByClassName('button');
deletion.addEventListener('click', deleteItem(item));
function deleteItem(item){
  let deletefromlist = document.createElement('button');
  deletefromlist.remove();
}

localStorage.setItem('createNew', JSON.stringify(li));
todoList.push(tasktobeInputted);




// let addButton = document.getElementById("new-task");
// // let editButton = document.getElementById("edit-button")
// // let deleteButton = document.getElementById("delete-button")
// function addItem () {
//   var newElement = document.createElement("new-task");
//   var inputValue = document.getElementById("new-task").value;
//   var insertItems = document.createTextNode(inputValue);
//   li.appendChild(insertItems);
// }
//   if (inputValue === ''){
//     alert("You must write something!");
//     return;
  // }
  // else {
  //   document.getElementById("incomplete-tasks").appendChild(li)
  // }
  // document.getElementById("new-task").value = "";

  // document.addEventListener("click", addItem);

// listOfData = JSON.parse(localStorage.getItem("listOfData"))
// //listOfData.push ({})
// localStorage.setItem("listOfData", JSON.stringify(listOfData));
// showData();

// function editItem (item) {

// }

// function deleteItem (item) {

// }


