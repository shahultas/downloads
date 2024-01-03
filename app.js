const express = require('express');
const app = express();
const path = require('path');
const port = 'https://shanibckdownloads.netlify.app/';

app.use(express.static(path.join(__dirname, 'asset')));

app.get('/', (req, res)=> {
res.send('<h1>Homepage</h1><br><br><img src="images/images.png" /><br><br><a href="/download"> Download </a>');
});


app.get('/download', (req, res)=> {
res.download(path.join(__dirname, 'asset/images/images.png'));
});


app.listen(port, ()=> {
console.log(`server connected at ${port}`);
});
