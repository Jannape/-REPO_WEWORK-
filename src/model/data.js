window.createVisitantInFirebase = (name, type, dni, companySearch, search, reason) => {
	(firebase.database().ref().child('users')).push({
		// visitantId:firebase.auth().currentUser.uid,
		visitantName: name.value,
		visitantTypeDocument: type.value,
		visitantDni: dni.value,
		visitantCompanySearch: companySearch.value,
		visitantSearch: search.value,
		visitantReason: reason.value
	}).then(() => {
		console.log('Error');
	})
}


window.showVisitantInAdmin = (viewHMTL) => {
	let refVisitant = (firebase.database().ref().child('users'));

	refVisitant.on('value', (snap) => {
		let elementsView = '';
		let data = snap.val();

		for (let key in data) {
			elementsView += `
            <img class="card-img-top" src="assets/img/fondo.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                    	<p class="card-text">${data[key].visitantName}</p>
                    	<p class="card-text">${data[key].visitantDni}</p>
                      <p class="card-text">${data[key].visitantSearch}</p>
                      <p class="card-text">${data[key].visitantReason}</p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>`
		}
		viewHMTL.innerHTML = elementsView;
	})
}

window.viewImageCamera = (video, canvas, img, btnSave) => {

	// navigator.getUserMedia = (navigator.getUserMedia ||
	// 	navigator.webkitGetUserMedia ||
	// 	navigator.mozGetUserMedia ||
	// 	navigator.msGetUserMedia);

	if (navigator.getUserMedia) {
		navigator.getUserMedia({
			video: true
		}, function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, function (e) {})
	} else {
		alert('Nav obsoleto');
	}
	// video.addEventListener('loadedmetadata', function () {
	// 	canvas.width = video.videoWidth;
	// 	canvas.heigth = video.videoHeight;
	// }, false);

	// btnSave.addEventListener('click', () => {
	// 	canvas.getContext('2d').drawImage(video, 10, 0);
	// 	let imgData = canvas.toDataURL('image/png');
	// 	img.setAttribute('src', imgData);
	// })
	// Grab elements, create settings, etc.

	// Get access to the camera!
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		// Not adding `{ audio: true }` since we only want video now
		navigator.mediaDevices.getUserMedia({
			video: true
		}).then(function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		});
	}
}

let confirmationVisitant = `
<div class="card" style="width: 18rem;">
  ${context}
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
`


// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false