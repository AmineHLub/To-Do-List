export default function updaterInput(number) {
  function updateValue(e) {
    const previousData = JSON.parse(localStorage.getItem('storedTodos'));
    previousData[number - 30].description = e.target.value;
    localStorage.setItem('storedTodos', JSON.stringify(previousData));
  }
  document.querySelector(`#\\${number} > .list-items`).readOnly = false;
  document.querySelector(`#\\${number} > .list-items`).addEventListener('change', updateValue);
}
