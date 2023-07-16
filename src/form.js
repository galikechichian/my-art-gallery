/*Author: Gali Kechichian*/

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');

function validateName(){
    if (nameInput.value === "") {
        nameInput.classList.add('invalid');
        document.getElementById('name-error').classList.add('invalid');
    }
    else {
        nameInput.classList.remove('invalid');
        document.getElementById('name-error').classList.remove('invalid');
    }
}

function validateEmail() {
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!pattern.test(emailInput.value) || emailInput.value === "") {
        emailInput.classList.add('invalid');
        document.getElementById('email-error').classList.add('invalid');
    }
    else {
        emailInput.classList.remove('invalid');
        document.getElementById('email-error').classList.remove('invalid');
    }
}

function validateMessage() {
    if (msgInput.value === "") msgInput.classList.add('invalid');
    else msgInput.classList.remove('invalid');
}


form.addEventListener('submit', (event)=> {
    event.preventDefault();

    validateName();
    validateEmail();
    validateMessage();

    // call functions on key up:
    nameInput.addEventListener('keyup', (event)=> {
        validateName();
        if (event.key === "Enter")
        emailInput.focus();
    });
    emailInput.addEventListener('keyup', (event)=> {
        validateEmail();
        if (event.key === "Enter") msgInput.focus();
    });
    msgInput.addEventListener('keyup', validateMessage);

    // if all of the inputs are valid, submit
    if (!nameInput.classList.contains('invalid')
    && !emailInput.classList.contains('invalid')
    && !msgInput.classList.contains('invalid')) {
        form.submit();
    }

})

