const btnRegister = document.getElementById('btn-register-visitant');
const formRegisterVisitant = document.getElementById('register-visitant');

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let btnCamera = document.getElementById('btn-camera');
let img = document.getElementById('img-visitant');
let savePhoto = document.getElementById('btn-save-photo');
savePhoto.style.display = 'none';

btnRegister.addEventListener('click', () => {
    let nameVisitant = document.getElementById('name-visitant');
    let dniVisitant = document.getElementById('dni-visitant');
    let searchVisitant = document.getElementById('search-visitant');
    let reasonVisitant = document.getElementById('reason-visitant');

    window.createVisitantInFirebase(nameVisitant, dniVisitant, searchVisitant, reasonVisitant);
    formRegisterVisitant.reset();
})


btnCamera.addEventListener('click', ()=>{
    savePhoto.style.display = 'block';
    viewImageCamera(video,canvas,img,savePhoto); 
})
