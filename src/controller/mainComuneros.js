
let btnListComuneros = document.getElementById('button-addon2');
let tblListComuneros = document.getElementById('tbl-list-comuneros');
let inputSearch = document.getElementById('search-visitant');
fetch('src/model/comuneros.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    filterComuneros = () => {
      let txtInputSearch = inputSearch.value;
      let listFilter = myJson.filter(comunero => (comunero.nombre.toUpperCase()).indexOf(txtInputSearch.toUpperCase()) !== -1);
      tblListComuneros.innerHTML = "";
      for (const iterator of listFilter) {
        console.log(iterator.nombre);
        tblListComuneros.innerHTML += `
                <option  value="${iterator.nombre}" value= >${iterator.nombre}</option>`
         
      }
      console.log(listFilter);
    };
  });

  