import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const feedbackFormData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;
    const formData = {
        email,
        message,
    };
/* try {
    console.log(localStorage.getItem(FORM_FIELDS_KEY));
      
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
} catch (error) {
    return alert('всі поля повинні бути заповнені!')
} */
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
    feedbackFormData[event.target.name] = event.target.value;
   /*  const userData = {
        userMail: email.value,
        userMessage: message.value,
    }; */
    console.log(feedbackFormData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function populateForm() {
    const saveFormData = localStorage.getItem(STORAGE_KEY);
    const saveFormDataPars = JSON.parse(saveFormData);
     console.log(saveFormDataPars);
    
    if (saveFormDataPars) {
    input.value = saveFormDataPars.email;
    textarea.value = saveFormDataPars.message;
    feedbackFormData.message = saveFormDataPars.message;
    feedbackFormData.email = saveFormDataPars.email;
        
};
}
