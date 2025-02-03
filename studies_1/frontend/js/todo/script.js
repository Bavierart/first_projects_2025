const ul = document.getElementById("u-list")
const submitButton = document.getElementById("submit-task")
const inputField = document.getElementById("input-field")


function submitTask() {
    //get value and reset input
    let task = inputField.value
    inputField.value = ""
    //create list element
    const listElementToAdd = document.createElement("li")
    listElementToAdd.innerText= task
    //append list element
    ul.appendChild(listElementToAdd)
    //add event listener to remove task
    listElementToAdd.addEventListener("click", listElementToAdd.remove)
}
