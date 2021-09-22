export default function updater(number) {
  const previousData = JSON.parse(localStorage.getItem('storedTodos'));
  const defaultVal = previousData[number].completed;
  let nextVal;
  if (defaultVal === false) {
    nextVal = true;
  } else {
    nextVal = false;
  }
  previousData[number].completed = nextVal;
  localStorage.setItem('storedTodos', JSON.stringify(previousData));
}