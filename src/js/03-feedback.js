import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const feedbackFormData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
    event.preventDefault();

    console.log('відправляєм форму');
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
     console.log(saveFormDataPars);
    
    if (saveFormDataPars !== null) {
    form["email"].value = saveFormDataPars.email;
    form["message"].value = saveFormDataPars.message;
};
}
