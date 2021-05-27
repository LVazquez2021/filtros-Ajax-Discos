const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const landing = path.join(__dirname, '../frontend', 'index.html');

const discos = require('../discos.json');



//middleware
app.use(express.urlencoded({ extended: true }));
/* app.use(express.json()); */
app.use(express.static(path.join(__dirname, '../frontend')));


//rutas 

app.get('/', function(req, res) {
    res.sendFile(landing);
})



app.get('/discos', function(req, res) {
    const { artista, titulo, lanzamiento } = req.query
    let resultados = discos.discos
        //console.log(artista, titulo, lanzamiento);
    if (artista) {
        resultados = resultados.filter((disco) => disco.artista.toLowerCase().includes(artista.toString().toLocaleLowerCase()))

    }
    if (titulo) {
        resultados = resultados.filter((disco) => disco.titulo.toLowerCase().includes(titulo.toLowerCase()))

    }
    if (lanzamiento) {
        resultados = resultados.filter((disco) => disco.lanzamiento.toString() == lanzamiento);

    }
    if (artista && titulo && lanzamiento) {

    }

    res.json(resultados);
})




app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});