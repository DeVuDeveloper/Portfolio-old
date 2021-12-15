const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const email = document.getElementById('e-mail').value;
  const error = document.getElementById('error');
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if(email === email.toLowerCase() && email.match(pattern)) {
    error.innerHTML = 'Your Email Address is Valid. Form is sent.';
    error.style.color = '#00ff00';
    form.submit();
  } else {
    error.innerHTML = 'Please use lowercase!. Form is not sent';
    error.style.color = '#ff0000';
    e.preventDefault();
  }
});