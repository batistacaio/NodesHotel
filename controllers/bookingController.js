const reserva = [];

const bookingController = {

  showResumo: function(req,res,next){
    res.render('resumo')
  },

  reservar: function(req, res, next){
    const { entrada, saida, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;

      //   a minha função de calculo de quant de diarias deve ser feita aqui
      //  e o a multiplicaçao do total de dias e dos valor da suite aqui.

        reserva.push(
          {
          entrada: entrada,
          saida: saida,
          hospedes: hospedes,
          suites: suites,
          hospede1: hospede1,
          hospede2: hospede2,
          hospede3: hospede3,
          hospede4: hospede4
        });

     res.render('resumo')
     console.log(reserva)

        }
      };



         module.exports = bookingController;
