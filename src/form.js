/*Author: Gali Kechichian*/

function validateName(nameInput){
    return (nameInput !== "");
}

function validateEmail(emailInput) {
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return (emailInput.test(pattern) || emailInput !== "");
}

function changeDisplays() {
    // listen to the form submission event
    let form = document.getElementById('myForm');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        if (!validateName(nameInput.value)) {
            nameInput.classList.add('invalid');
            document.getElementById('name-error').classList.add('invalid');
        }
        if (!validateName(emailInput.value)) {
            emailInput.classList.add('invalid');
            document.getElementById('email-error').classList.add('invalid');
        }
    });
}
changeDisplays();

