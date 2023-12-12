const inputBox = document.getElementById('user-input');
const inputBtn = document.getElementById('add-task');
const listContainer = document.getElementById('list-container');


inputBtn.addEventListener("click", function Addtask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        //for creating a new task and adding
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //For adding a cancel button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value =""; //To clear the input box after clicking the add btn
    saveData(); //To save the data in LS
},false);

listContainer.addEventListener("click", function(e){

    //To toggle between the checked and unchecked task
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();//To save the action result in LS
    }

    //To remove the task after clicking the cancel button
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //To save the action result in LS
    }
}, false);


//Local Storage Methods

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data")

}

//To show the LS data after the web page is reopened
showList();

