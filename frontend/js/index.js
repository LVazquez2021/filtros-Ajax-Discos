const boton = document.getElementById('boton');
const dataTable = document.querySelector('#data-table');
const botonBorrar = document.getElementById('btnBorrar');
const artista = document.getElementById('artista');
const titulo = document.getElementById('titulo');
const lanzamiento = document.getElementById('lanzamiento');


function limpiar() {
    artista.value = '';
    titulo.value = '';
    lanzamiento.value = '';
}



/* botonBorrar.addEventListener('click', borrarData);

function borrarData() {
    dataTable.innerHTML = '';
    limpiar()
} */




boton.addEventListener('click', function() {
    console.log('click');
    //XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {
        const datos = JSON.parse(xhr.responseText)
        dataTable.innerHTML = '';
        for (let item of datos) {
            dataTable.innerHTML += `<tr ">
                    <td class="tdText">${item.artista} </td>
                    <td class="tdText">${item.titulo}</td>
                    <td class="tdText">${item.lanzamiento} </td>
                    <td><img src="${item.tapa}" width="max-width" height="200"></td>
                    </tr>`
        }
    })
    let urlData = "";
    if (artista.value) {
        urlData += (urlData ? "&" : "") + `artista=${artista.value}`
    };
    if (titulo.value) {
        urlData += (urlData ? "&" : "") + `titulo=${titulo.value}`
    };
    if (lanzamiento.value) {
        urlData += (urlData ? "&" : "") + `lanzamiento=${lanzamiento.value}`
    };


    xhr.open('GET', `/discos?${urlData}`);
    xhr.send();
});