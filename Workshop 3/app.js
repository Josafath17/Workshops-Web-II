const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());


app.get('/api/hello', (req, res) => {
    const message = req.query.message;
    let Respuesta;

    if (message) {
        Respuesta = [{ "Response": `Hello ${message}` }]
    } else {
        Respuesta = [{ "Response": "Hello World" }]
    }

    res.json(Respuesta);
});


app.post('/api/post/user', async (req, res) => {
    const Respuesta = [{
        "Respuesta": `El usuario ${req.body.name} ${req.body.lastname} fue creado`
    }]
    res.json(Respuesta);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor API web escuchando en http://localhost:${port}`);
});
