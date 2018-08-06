validatorNameUser = (name) => {
alert(name);
    if ((/^([A-Za-z0-9\s]{8,})+$/g.test(name))) {
      return true;
      alert('true');
    } else {
      return false;
    }
console.log('heeeyy soy la función validator ');
  };

  
  // window.validatorNameUser = (name) => {
  //   if ((/^([A-Za-z0-9\s]{8,})+$/g.test(name))) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

