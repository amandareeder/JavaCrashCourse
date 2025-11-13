const myForm = document.querySelector('my-form');
const nameInput = document.querySelector('name');
const emailInput = document.querySelector('email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innterHTML = "Please enter all fields';

    setTimeout(() => msg.remove());
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));
    
    userList.appendChild(li);

    //Clear Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
