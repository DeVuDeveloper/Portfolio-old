const form = document.getElementById('form');

form.addEventListener('submit', (element) => {
  const email = document.getElementById('e-mail').value;
  const error = document.getElementById('error');
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if (email === email.toLowerCase() && email.match(pattern)) {
    error.innerHTML = 'Your Email Address is Valid. Form is sent.';
    error.style.color = '#00ff00';
    form.submit();
  } else {
    error.innerHTML = 'Please use lowercase!. Form is not sent';
    error.style.color = '#ff0000';
    element.preventDefault();
  }
});

const textArea = document.getElementById('user-comments');
const lettersCounter = document.getElementById('counter');

textArea.addEventListener('input', (event) => { 
  const target = event.target;
  const maxLettersNumber = target.getAttribute('maxlength');
  const currentLettersNumber = target.value.length;
  lettersCounter.innerHTML = `${currentLettersNumber}/${maxLettersNumber}`;
});