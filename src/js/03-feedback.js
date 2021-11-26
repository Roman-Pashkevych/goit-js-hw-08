import throttle from 'lodash.throttle';

/* const STORAGE_KEY = "feedback-form-state";
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
} */

const storage_Key = 'feedback-form-state';

const formRef = document.querySelector('form');
const email = formRef.elements.email;
const message = formRef.elements.message;

const onInput = e => {
  const formData = {
    mail: email.value,
    message: message.value,
  };
    localStorage.setItem(storage_Key, JSON.stringify(formData));
};
const getFromLS = () => {
  const parsedData = JSON.parse(localStorage.getItem(storage_Key));

  if (!parsedData) return;

  email.value = parsedData.mail;
  message.value = parsedData.message;
};
getFromLS();

const onSubmit = e => {
  e.preventDefault();

  if (!email.value || !message.value) {
    return alert('All feels must be fell out!');
  }

  console.log({ email: email.value, message: message.value });

  formRef.reset();
  localStorage.removeItem(storage_Key);
};

formRef.addEventListener('input', throttle(onInput, 500));

formRef.addEventListener('submit', onSubmit);
