const btnRegister = document.getElementById('btn-register-visitant');

btnRegister.addEventListener('click', (e) => {
    let inputNameVisited = document.getElementById('input-name-visited');
    let selectDocId = document.getElementById('selected-docId')
    let optionTypeDocId = selectDocId[selectDocId.selectedIndex].value;
    let inputDocId = document.getElementById('input-docId');
    let inputEmail = document.getElementById('input-email');
    let inputCompany = document.getElementById('input-company');
    let inputReason = document.getElementById('input-reason');
    let selectComunero = document.getElementById('tbl-list-comuneros');
    let optionComunero =  selectComunero[ selectComunero.selectedIndex].value;
    
    window.createVisited( inputNameVisited,optionTypeDocId,inputDocId,inputEmail,inputCompany,inputReason,optionComunero);

    // formRegisterVisitant.style.display = 'none'
    // takePhoto.style.display = 'none';
    // btnRegister.style.display = 'none';
    // cardVisit.innerHTML = confirmationVisitant;
  })