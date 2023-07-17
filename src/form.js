/*Author: Gali Kechichian
*/

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');

/**Self-explanatory: updates fields' classes according
 * to the client's inputs
 */
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

/**Validates the entire form
 */
function validateForm() {
    // call functions on key up:
    nameInput.addEventListener('keyup', (event)=> {
        event.preventDefault();
        validateName();
        if (event.key === "Enter") emailInput.focus();
    });

    emailInput.addEventListener('keyup', (event)=> {
        event.preventDefault();
        validateEmail();
        untouchedEmail=false;
        if (event.key === "Enter") msgInput.focus();
    });

    msgInput.addEventListener('keyup', ()=>{
        untouchedMsg=false;
        validateMessage();
    });

    validateName();
    if (!untouchedEmail) validateEmail();
    if (!untouchedMsg) validateMessage();
}


let untouchedEmail=true;
let untouchedMsg=true;
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    
    validateForm();

    // if all of the inputs are valid, submit the form
    // along with performing other actions
    if (!nameInput.classList.contains('invalid')
    && !emailInput.classList.contains('invalid')
    && !msgInput.classList.contains('invalid')
    && (!untouchedEmail && !untouchedMsg)) 
    {
        const serviceID = "service_sr902nk";
        const templateID = "template_3pzmokd";
        var params = {
            name: nameInput.value,
            email: emailInput.value,
            message:msgInput.value
        };

        emailjs.send(serviceID, templateID, params, "yRlQeVe4eCTSRcnWl").then(()=> {
            form.reset();
            document.getElementById('thankyou-msg').classList.add('submitted');
            document.getElementById('button').classList.add('submitted');
        });

    }

});
