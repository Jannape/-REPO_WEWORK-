
window.createVisited = (inputNameVisited, optionTypeDocId, inputDocId, inputEmail, inputCompany, inputReason) => {
    const dataTime = new Date();
    const mounth =dataTime.getMonth();
    const year =dataTime.getFullYear();
    const day=dataTime.getDate();
    const hours= dataTime.getHours();
    const minutes=dataTime.getMinutes();
    const fullTime = day+"/"+(mounth+1)+"/"+year+"-"+hours+":"+minutes;
     
    (firebase.database().ref().child('visiteds')).push({
     
        visitedName: inputNameVisited.value,
        visitedTypDocId: optionTypeDocId,
        visitedNumDocId: inputDocId.value,
        visitedEmail: inputEmail.value,
        visitedCompany: inputCompany.value,
        visitedReason: inputReason.value,
        visitedFecha :fullTime
    }).then(() => {
        console.log('error');
    })
}

                                                                                                                                                                                