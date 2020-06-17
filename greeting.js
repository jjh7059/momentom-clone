const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  editBtn = document.querySelector(".fa-edit");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  //submit 창에 무언가를 입력하고 엔터를 치면 사라지는게 기본값이지만 그것을 막는다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function toDisplay(element, boolean) {
  if (boolean) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function askForName() {
  toDisplay(editBtn, false)

  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function editName(event) {
  event.preventDefault();

  localStorage.removeItem(USER_LS);

  loadName();
}

function paintGreeting(text){
  toDisplay(editBtn, true);

  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}!`;

  editBtn.addEventListener('click', editName);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(!currentUser) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();
