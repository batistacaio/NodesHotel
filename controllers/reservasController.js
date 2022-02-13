const reservasController = {
//     index: (req,res,next) => {
//       if(!("usuario_logado" in req.session) || req.session.usuario_logado == false){
//         res.send("você precisa se logar no site para ter acesso à página de reservas")
//       }else{
    
//       res.render('reservas')
//     }
//   }
// };
// este codigo foi temporariamente comentado para permitir o acesso a view de reservas pois o projeto apresenta problema na session.
index: (req, res, next)=>{
  res.render('reservas')
}
}

  module.exports = reservasController;






