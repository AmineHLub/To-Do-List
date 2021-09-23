export default function removeOrDrug(number) {
  if (document.querySelector(`#\\${number} > .checkbox`).checked === true) {
    document.querySelector(`#\\${number}`).remove();
    const previousData = JSON.parse(localStorage.getItem('storedTodos'));
    previousData.splice(number - 30, 1);
    for (let i = 0; i < previousData.length; i += 1) {
      previousData[i].index = i;
      window.location.reload();
    }
    localStorage.setItem('storedTodos', JSON.stringify(previousData));
  }
}