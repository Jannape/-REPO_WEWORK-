validatorNameUser = (name) => {
    alert('Bienvenido'+name);
    if ((/^([A-Za-z0-9\s]{3,})+$/g.test(name))) {
        console.log('true');
        return true;

    } else {
        console.log('false')
        return false;
    }
};


validateContentOfpublications = (descriptionPostValue) => {
    if (/^(?!\s)/.test(descriptionPostValue) && /^([A-Za-z0-9\s]{1,})/g.test(descriptionPostValue)) {
      return true;
    } else {
      return false;
    }
  };
  /* *******************************************FUNCIONES DE VALIDACIÓN*******************************/
  
  window.validatorEmail = (email) => {
    if (/^([a-zA-Z0-9._-]{3,})+@([a-zA-Z0-9.-]{5,})+\.([a-zA-Z]{2,})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };


