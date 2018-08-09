
window.createVisited = (inputNameVisited, optionTypeDocId, inputDocId, inputEmail, inputCompany, inputReason) => {
    let  date = new Date();
    let codDate = date.getTime();
    let  fecha = date.setTime(codDate);
    
    (firebase.database().ref().child('visiteds')).push({
     
        visitedName: inputNameVisited.value,
        visitedTypDocId: optionTypeDocId,
        visitedNumDocId: inputDocId.value,
        visitedEmail: inputEmail.value,
        visitedCompany: inputCompany.value,
        visitedReason: inputReason.value,
        visitedFecha :fecha
    }).then(() => {
        console.log('error');
    })
}

                                                                                                                                                                                