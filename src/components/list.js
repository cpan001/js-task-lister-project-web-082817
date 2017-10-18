/*
list is responsible for creating a single list component
*/

const List = (() => {
  let id = 1;
  return class List {
    constructor(title) {
      this.id = ++id;
      this.title = "";
    }

    renderList() {
      const listText = document.getElementById("new-list-title");
      const listDiv = document.createElement("div");
      listDiv.innerText = listText.value;
      listDiv.dataset.name = listText.value;

      const selectList = document.getElementById("parent-list");
      const listOption = document.createElement("option");
      listOption.value = listText.value;
      listOption.innerText = listText.value;
      listOption.dataset.name = listText.value;
      selectList.appendChild(listOption);
      this.title = listText.value;

      return listDiv;
    }
  };
})();
