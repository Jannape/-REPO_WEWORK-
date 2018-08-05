

window.createVisitantInFirebase = (name, dni, search, reason) => {
    (firebase.database().ref().child('users')).set( {
           // visitantId:firebase.auth().currentUser.uid,
            visitantName: name.value,
            visitantDni: dni.value,
            visitantSearch: search.value,
            visitantReason: reason.value
    }).then(() => {
        console.log('Error');
    })
}