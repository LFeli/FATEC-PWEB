var app = require('./app/config/server'); // carregando o módulo do servidor 

var rotaHome = require('./app/routes/home'); 
rotaHome(app); 
var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); 
rotaAdicionarUsuario(app); 
var rotaHistoria = require('./app/routes/historia'); // só está definindo 
rotaHistoria(app); // está executando 
var rotaCursos = require('./app/routes/cursos'); // só está definindo 
rotaCursos(app); // está executando
var rotaProfessores = require('./app/routes/professores'); // só está definindo 
rotaProfessores(app); // está executando 
/* poderia executar assim também*/ 
/* var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')(app); */ 
app.listen(3000, function(){     console.log("servidor iniciado"); }); 

