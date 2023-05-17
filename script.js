let burger = document.querySelector('.burger')
let navigation = document.querySelector('.nav-ul')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
} )







let inputText = document.querySelector('.input1')
let btn = document.querySelector('.add-btn')
let ulList = document.querySelector('.ul-todolist')


btn.addEventListener('click', () => {
    let inputValue = inputText.value;

    let liElement = document.createElement('li');

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', () => {
        liElement.remove();
    })
    liElement.textContent = inputValue;
    liElement.appendChild(deleteBtn);
    ulList.appendChild(liElement);

    inputText.value = ' ';
})