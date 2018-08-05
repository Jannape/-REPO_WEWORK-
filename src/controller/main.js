const btnRegister = document.getElementById('btn-register-visitant');
const formRegisterVisitant = document.getElementById('register-visitant');

btnRegister.addEventListener('click', () => {
let nameVisitant = document.getElementById('name-visitant');
let dniVisitant = document.getElementById('dni-visitant');
let searchVisitant = document.getElementById('search-visitant');
let reasonVisitant = document.getElementById('reason-visitant');

window.createVisitantInFirebase(nameVisitant,dniVisitant,searchVisitant,reasonVisitant);
formRegisterVisitant.reset();
})