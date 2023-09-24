let todoInput; //miejsce, w którym użytkownik wpisuje treść zadania
let errorInfo; //info o braku zadan
let addBtn; // przycisk ADD, dodający elementy do listy
let ulList; // lista zadan
let newTodo; // nowo dodane zadanie
let popup; // popup
let popupInfo; // tekst w popupie
let todoToEdit; // edytowany Todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk 'zatwierdz' w popupie
let popupCloseBtn; // przycisk 'anuluj' w popupie
const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist');
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
};
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
};
const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        createToolsArea();
        ulList.append(newTodo);
        todoInput.value = '';
        errorInfo.textContent = '';
    }
    else {
        errorInfo.textContent = 'Wpisz treść zadania!';
    }
};
const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTodo.append(toolsPanel);
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.append(completeBtn, editBtn, deleteBtn);
};
const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    }
    else if (e.target.matches('.edit')) {
        editTodo(e);
    }
    else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
};
const editTodo = e => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
};
const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
};
const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.textContent = '';
    }
    else {
        popupInfo.textContent = 'Musisz podać jakąś treść!';
    }
};
const deleteTodo = e => {
    e.target.closest('li').remove();
    const allTodos = ulList.querySelectorAll('li');
    if (allTodos.lenght === 0) {
        errorInfo.textContent = 'Brak zadań na liście ';
    }
};
document.addEventListener('DOMContentLoaded', main);
