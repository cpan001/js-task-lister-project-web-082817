document.addEventListener("DOMContentLoaded", () => {
  // const app = new App()
  // app.render()


  const listCreateButton = document.querySelector("#create-list-form input:last-child")
  const lists = document.getElementById("lists")
  listCreateButton.addEventListener("click", function(e) {
    e.preventDefault();

    const newList = new List()
    // debugger;

    // const listText = document.getElementById("new-list-title")
    // const listDiv = document.createElement("div")
    // listDiv.innerText = listText.value
    // listDiv.dataset.name = listText.value
    // listDiv.id = ++listId;

    //add to select list
    // const listOption = document.createElement("option")
    // listOption.value = listText.value
    // listOption.innerText = listText.value
    // listOption.dataset.name = listText.value
    // selectList.appendChild(listOption)
    listDiv = newList.renderList()
    lists.appendChild(listDiv)
    listDiv.appendChild(document.createElement("ul"))
  })



  lists.addEventListener("mouseover", function(e) {
    const clicked = e.target
    clicked.className = "delete-list"
    clicked.addEventListener("click", function(e) {
      const selectedList = document.querySelector(`#parent-list option[data-name='${clicked.innerText}']`)
      selectedList.remove()
      clicked.remove()
    })
    clicked.addEventListener("mouseover",function(et){
      const taskClicked = et.target
      taskClicked.className = "delete-task"
      taskClicked.addEventListener("click", function(event){
        event.stopPropagation()
        taskClicked.remove()
      })
    })
  })



  const taskCreateButton = document.querySelector("#create-task-form input:last-child")

  let taskId = 0

  taskCreateButton.addEventListener("click", function(e) {
    e.preventDefault();
    const taskText = document.getElementById("new-task-description")
    const taskPriority = document.getElementById("new-task-priority")
    const selectedList = document.getElementById("parent-list").value
    const taskDiv = document.createElement("li")
    taskDiv.innerText = ` ${taskText.value},${taskPriority.value}`
    const floatingList = document.querySelector(`#lists div[data-name='${selectedList}'] ul`)
    floatingList.appendChild(taskDiv)
  })




  //select list



})
