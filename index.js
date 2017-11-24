const bodyParser = require('body-parser');
const express = require('express');

const app = module.exports = express();

const http = require('http').Server(app);

const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));


app.use(express.static('./public/'));
app.use('/img', express.static('./public/images/'));
app.use('/img', express.static('./public/galeria/'));
app.use(express.static('./public/videos/'));
// application -------------------------------------------------------------

app.get('/videos', function(req, res) {
    res.sendfile(`${__dirname}/public/videos.html`);
});

app.get('/galeria', function(req, res) {
    res.sendfile(`${__dirname}/public/galeria.html`);
});

app.get('/sobre', function(req, res) {
    res.sendfile(`${__dirname}/public/sobre.html`);
});

app.get('*', (req, res) => {
  res.send(`${__dirname}/public/index.html`);
});

http.listen(port, () => {
  console.log(`App server running on port ${port}!`);
});
