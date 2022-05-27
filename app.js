let addToDo = document.getElementById("addToDo");
let ToDocontainer = document.getElementById("ToDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

addToDo.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p-style");
  ToDocontainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  inputText.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    ToDocontainer.removeChild(paragraph);
  });

  clearToDo.addEventListener("click", function () {
    paragraph.style.display = "none";
  });
});
