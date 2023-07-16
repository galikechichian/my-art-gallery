/*Author: Gali Kechichian*/

const form = document.getElementById("myForm");
const nameE = document.getElementById("name");
const emailE = document.getElementById("email");
const messageE = document.getElementById("message");
const fields = [nameE, emailE, messageE];

function validateField(field) {
    if (field.value === "") {
        field.classList.add('invalid');
    }else field.classList.remove('invalid');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    fields.forEach(validateField);

    if (!nameE.classList.contains('invalid') 
    && !emailE.classList.contains('invalid')
    && !messageE.classList.contains('invalid')) {
        form.submit();
    }
});


nameE.addEventListener('input', validateField);
emailE.addEventListener('input', validateField);
messageE.addEventListener('input', validateField);


