var eventos = require("events");
var EmissorEventos = eventos.EventEmitter;
var ee = new EmissorEventos();
ee.on("\tdados ", function (fecha) {
  console.log(fecha);
});
setInterval(function () {
  ee.emit("\tdados ", Date.now());
}, 500);
