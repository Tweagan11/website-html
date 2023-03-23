// const http = require('http');
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello Node.js!</h1>');
//   res.write('<p>Water. Earth. Fire. Air. My grandmother used to tell me stories about the old days, a time of peace when the Avatar kept balance between the Water Tribes, Earth Kingdom, Fire Nation, and Air Nomads. But that all changed when the Fire Nation attacked. Only the Avatar mastered all four elements. Only he could stop the ruthless firebenders, but when the world needed him most, he vanished. A hundred years have passed and the Fire Nation is nearing victory in the War. Two years ago, my father and the men of my tribe journeyed to the Earth Kingdom to help fight against the Fire Nation, leaving me and my brother to look after our tribe. Some people believe that the Avatar was never reborn into the Air Nomads, and that the cycle is broken. But I haven\'t lost hope. I still believe that somehow, the Avatar will return to save the world.</p>');
//   res.end();
// });

// server.listen(8080, () => {
//   console.log(`Web service listening on port 8080`);
// });


const express = require('express');
const app = express();

app.listen(8000);


const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});

app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});