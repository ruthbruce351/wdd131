const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('submit');

const li = document.createElement('li');

li.textContent = input.value;

deleteButton.textContent = '❌';

const deleteButton = document.createElement('button');

button.addEventListener('click', function() { 
    if (input.value.trim() !== '') {
    list.append(li);
    li.append(deleteButton);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
    
    input.value = '';
    input.focus();
    } else {
        input.value = '';
        input.focus();
    }
});
