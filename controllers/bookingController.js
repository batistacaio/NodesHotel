const reserva = [];
const { check, validationResult, body} = require('express-validator');
const bookingController = {
    reservar: function(req, res, next){

    let  listaDeErros = validationResult(req);
    if(listaDeErros.isEmpty()){
        const { checkin, checkout, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;

      //   a minha função de calculo de quant de diarias deve ser feita aqui
      //  e o a multiplicaçao do total de dias e dos valor da suite aqui.

        reserva.push(
          {
          checkin: checkin,
          checkout: checkout,
          hospedes: hospedes,
          suites: suites,
          hospede1: hospede1,
          hospede2: hospede2,
          hospede3: hospede3,
          hospede4: hospede4
        });

          console.log(reserva)

          }else {
            return res.render('reservas', {erros: listaDeErros.errors})
          }
        }
      };



         module.exports = bookingController;
