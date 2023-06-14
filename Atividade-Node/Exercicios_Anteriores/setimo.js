var http = require("http");
var server = http.createServer(function (req, res) {
  var opcao = req.url;
  if (opcao == "/historia") {
    res.end(
      `<html><head><meta charset="UTF-8" />   <title>Jankenpon✌️</title></head><body>História da Fatec Sorocaba</body></html>`
    );
  } else if (opcao == "/cursos") {
    res.end("<html><body>Cursos</body></html>");
  } else if (opcao == "/professores") {
    res.end(`<html>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   
    </head> 
    <body
    ><h1>Professores</h1>
    </body>
    </html>`);
  } else res.end("<html><body>Site da Fatec Sorocaba</body></html>");
});
server.listen(3000);
