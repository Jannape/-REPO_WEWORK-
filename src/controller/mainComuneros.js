
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
            <tr>
    
       <td>${iterator.nombre}</td>
   
          </tr>`
            }
        
            console.log(listFilter);
        };
        if (target.className.indexOf('input-search') == -1)
   
        
        searchComunero = () => {
            let txtInputSearch = inputSearch.value;
            let listFilter = myJson.filter(comunero => (comunero.nombre.toUpperCase()).indexOf(txtInputSearch.toUpperCase()) !== -1);
      
            for (const iterator of listFilter) {
                if (iterator.nombre === txtInputSearch) {
                    tblListComuneros.innerHTML += `
                    <tr>
               <td>${iterator.id}</td>
               <td>${iterator.nombre}</td>
               <td>${iterator.DNI}</td>
               <td>${iterator.empresa}</td>
                  </tr>`
                    
                }
            }
        }
        // btnListComuneros.addEventListener('click', () => {
        //      searchComunero(); 
        //      alert('me dieron click soy el boton buscar');
        //     });
       
       
    });