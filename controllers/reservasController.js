const reservasController = {
    index: (req,res,next) => {
      console.log(req.session);
      if(req.session.usuario == undefined){
        res.redirect("/logar");
      }else{
    
      res.render('reservas')
      }
  }
};

module.exports = reservasController;






