const btnRegister = document.getElementById('btn-register-visitant');
const formRegisterVisitant = document.getElementById('register-visitant');

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let btnCamera = document.getElementById('btn-camera');
let img = document.getElementById('img-visitant');
let context = canvas.getContext('2d');


btnRegister.addEventListener('click', () => {
	// let nameVisitant = document.getElementById('name-visitant');
	// let dniVisitant = document.getElementById('dni-visitant');
	// let searchVisitant = document.getElementById('search-visitant');
	// let reasonVisitant = document.getElementById('reason-visitant');
	formRegisterVisitant.style.display = 'none'

	// window.createVisitantInFirebase(nameVisitant, dniVisitant, searchVisitant, reasonVisitant);
	// formRegisterVisitant.reset();
})


window.onload = () => {
	document.getElementById('create-photo').style.display = 'none';

}

/*btnCamera.addEventListener('click', ()=>{
    save(canvas,img);
})*/

document.getElementById('btn-camera').addEventListener('click', () => {
	document.getElementById('create-photo').style.display = 'block';
	viewImageCamera(video, canvas, img, btnCamera);
	formRegisterVisitant.style.display = 'none'
})

// document.getElementById('check-email').addEventListener('touchmove', () => {

// })

// Trigger photo take
document.getElementById("snap").addEventListener("click", function () {
	context.drawImage(video, 0, 0, 640, 480);
});