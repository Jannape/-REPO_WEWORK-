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


  // window.validatorNameUser = (name) => {
  //   if ((/^([A-Za-z0-9\s]{8,})+$/g.test(name))) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

