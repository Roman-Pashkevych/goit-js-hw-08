import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const feedbackFormData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();
validate_form();
function onFormSubmit(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;
    const formData = {
        email,
        message,
    };
    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
    feedbackFormData[event.target.name] = event.target.value;
    console.log(feedbackFormData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function populateForm() {
    const saveFormData = localStorage.getItem(STORAGE_KEY);
    const saveFormDataPars = JSON.parse(saveFormData);
     
    
    if (saveFormDataPars) {
    input.value = saveFormDataPars.email;
    textarea.value = saveFormDataPars.message;
    feedbackFormData.message = saveFormDataPars.message;
    feedbackFormData.email = saveFormDataPars.email;
        
};
}

function validate_form ()
{
	valid = true;

        if ( feedbackFormData.message === "" )
        {
                alert ( "Пожалуйста, введите данные в поле 'message'." );
                valid = false;
        }

        if ( feedbackFormData.email === "" )
        {
                alert ( "Пожалуйста, введите данные в поле 'email'." );
                valid = false;
        }

        return valid;
}