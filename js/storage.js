const contactForm = document.querySelector('#form');
const { name, email, comments} = contactForm.elements;

contactForm.addEventListener('change', () => {
  const obj = {};

  if (name.value.trim() !== '') {
    obj.userName = name.value.trim();
  }

  if (email.value.trim() !== '') {
    obj.userEmail = email.value.trim();
  }

  if (comments.value.trim() !== '') {
    obj.userMessage = comments.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});

const formObj = JSON.parse(localStorage.getItem('formData'));
const { userName, userEmail, userMessage } = formObj;

name.value = userName || '';
email.value = userEmail || '';
comments.value = userMessage || '';