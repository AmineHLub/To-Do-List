class Todos {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

export default function addingNewTodos() {
  const previousData = JSON.parse(localStorage.getItem('storedTodos'));
  previousData.push(new Todos(document.querySelector('.list-input > input').value, previousData.length));
  localStorage.setItem('storedTodos', JSON.stringify(previousData));
  window.location.reload();
}