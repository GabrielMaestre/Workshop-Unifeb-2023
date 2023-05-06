import express from "express";
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (req, res) => {
 res.send("HELLO!");
});

app.post('/teste', async function (req, res) {
 res.send('Recebi seu Teste!');
 console.log('Teste Recebido:', req.body);
});

app.listen(port, async() => {

 console.log("Online on Port", port);

});