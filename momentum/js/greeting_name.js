const NAME = document.querySelector('.name');

NAME.placeholder = '[Enter name]';

function setLocalStorage() {
  localStorage.setItem('name', NAME.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    NAME.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)




