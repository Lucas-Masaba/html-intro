let addButton = document.querySelector('#add')
let input = document.querySelector('#inputField')
let tasksDiv = document.querySelector('#tasks')

const addTask = (tasks) => {
  tasks.innerHTML += `
  <div class="task">
      <span id="taskname">
          ${input.value}
      </span>
      <button class="delete">
          <i class="far fa-trash-alt"></i>
      </button>
  </div>
`;
}

const delTask = () => {
  let delButtons = document.querySelectorAll('.delete')

  delButtons.forEach((delButton) => {
    // delButton.addEventListener('click', () => {
    //   delButton.parentNode.remove()
    // })
    delButton.onclick = function () {
      this.parentNode.remove();
    }
  });
}

addButton.addEventListener('click', () => {
  addTask(tasksDiv)
})

document.addEventListener('click', () => {
  delTask()
})

