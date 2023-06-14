module.exports = function(app) { 
    app.get('/informacao/professores', function(req,res){     
        res.render('informacao/professores'); 
    }); 
} 