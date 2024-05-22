
var overlayy = document.getElementById("over-lay")
var popupboxx = document.getElementById("popup-box")
var addbutton = document.getElementById("addbtn")
addbutton.addEventListener("click", function () {
    overlayy.style.display = "block"
    popupboxx.style.display = "block"

})
var cancel = document.getElementById("cancelbtn")
cancel.addEventListener("click", function () {
    overlayy.style.display = "none"
    popupboxx.style.display = "none"

})

var addtask = document.getElementById("addtaskbtn")
addtask.addEventListener("click", function () {
    var input = document.getElementById("inputtask")
    var taskscontainer = document.querySelector(".tasks")
    var taskbox = document.createElement("div")
    taskbox.setAttribute("class", "individualtask")
    taskbox.setAttribute("onclick","changebg(event)")
    taskbox.innerHTML = ` <h4>${input.value}</h4><button class="del" onclick="deletetask(event)">X</button>`
    taskscontainer.append(taskbox)
    overlayy.style.display = "none"
    popupboxx.style.display = "none"


})
function deletetask(event)
{
    event.target.parentElement.remove()

}
function changebg(event){
    
    event.target.style.background="green"
    
}
