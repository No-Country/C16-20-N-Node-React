import express from 'express';

console.log("HOLA MUNDO");


const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('La aplicación está funcionando!!! 😁😁😁');
    });


app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
