const btnRegister = document.getElementById('btn-register-visitant');
const formRegisterVisitant = document.getElementById('register-visitant');
const takePhoto = document.getElementById('create-photo')

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let btnCamera = document.getElementById('btn-camera');
let img = document.getElementById('img-visitant');
let context = canvas.getContext('2d');
let cardVisit = document.getElementById('cardVIsit')

btnRegister.addEventListener('click', () => {
  let nameVisitant = document.getElementById('name-visitant');
  let typeDocument = document.getElementById('option-document')
  let dniVisitant = document.getElementById('dni-visitant');
  let companyVisitant = document.getElementById('company-visitant');
  let searchVisitant = document.getElementById('search-visitant');
  let reasonVisitant = document.getElementById('reason-visitant');
  window.createVisitantInFirebase(nameVisitant, typeDocument, dniVisitant, companyVisitant, searchVisitant, reasonVisitant);
  formRegisterVisitant.style.display = 'none'
  takePhoto.style.display = 'none';
  btnRegister.style.display = 'none';
  cardVisit.innerHTML = confirmationVisitant;
})
document.getElementById('active-camera').addEventListener('click', () => {
  takePhoto.style.display = 'block';
  viewImageCamera(video, canvas, img, btnCamera);
  formRegisterVisitant.style.display = 'none'
})

document.getElementById("btn-camera").addEventListener("click", function () {
  context.drawImage(video, 0, 0, 640, 480);
});

