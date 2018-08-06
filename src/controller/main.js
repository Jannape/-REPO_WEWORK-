const btnRegister = document.getElementById('btn-register-visitant');
const formRegisterVisitant = document.getElementById('register-visitant');

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let btnCamera = document.getElementById('btn-camera');
let img = document.getElementById('img-visitant');


btnRegister.addEventListener('click', () => {
    let nameVisitant = document.getElementById('name-visitant');
    let dniVisitant = document.getElementById('dni-visitant');
    let searchVisitant = document.getElementById('search-visitant');
    let reasonVisitant = document.getElementById('reason-visitant');

    window.createVisitantInFirebase(nameVisitant, dniVisitant, searchVisitant, reasonVisitant);
    formRegisterVisitant.reset();
})



window.onload = () =>{
    viewImageCamera(video,canvas,img,btnCamera); 
}

/*btnCamera.addEventListener('click', ()=>{
    save(canvas,img);
})*/