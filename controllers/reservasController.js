const reservasController = {
    index: (req,res,next) => {
      if(!("usuario_logado" in req.session) || req.session.usuario_logado == false){
        res.send("você precisa se logar no site para ter acesso à página de reservas")
      }else{
    
      res.render('reservas')
    }
  }
};

  module.exports = reservasController;






