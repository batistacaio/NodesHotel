const reservasController = {
    index: (req,res,next) => {
      console.log(req.session);
      if(req.session.usuario == undefined){
        res.send("você precisa se logar no site para ter acesso à página de reservas")
      }else{
    
      res.render('reservas')
    }
  }
};

  module.exports = reservasController;






