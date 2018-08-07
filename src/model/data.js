

window.createVisitantInFirebase = (name, dni, search, reason) => {
    (firebase.database().ref().child('users')).push({
        // visitantId:firebase.auth().currentUser.uid,
        visitantName: name.value,
        visitantDni: dni.value,
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
                                </p>
            `
        }
        viewHMTL.innerHTML = elementsView;
    })
}

window.viewImageCamera = (video, canvas, img, btnSave) => {

    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, function (e) { })
    }
    else {
        alert('Nav obsoleto');
    }
    video.addEventListener('loadedmetadata', function () {
        canvas.width = video.videoWidth;
        canvas.heigth = video.videoHeight;
    }, false);

    btnSave.addEventListener('click', () => {
        canvas.getContext('2d').drawImage(video, 0, 0);
        let imgData = canvas.toDataURL('image/png');
        img.setAttribute('src', imgData);
    })

    
}

