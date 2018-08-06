
const btnRegister = document.getElementById('btn-register');
const inputName = document.getElementById('input-name').value;
const inputDNI = document.getElementById('input-dni');
const inputNameVisited = document.getElementById('input-name-visited');
const btntSearchVisited = document.getElementById('btn-search-visited');
const inputReason = document.getElementById('input-reason');


btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = document.getElementById('input-name').value;
    validatorNameUser(inputName);

  });