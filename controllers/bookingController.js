// const { parseTwoDigitYear } = require('moment');
// const moment = require('moment');

const reserva = [];

const bookingController = {

  showResumo: function(req,res,next){
    res.render('resumo')
  },

  reservar: function(req, res, next){
    const { entrada, saida, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;
    const diarias = [

  {suite :"PLAZA", diaria: 240.00},
  {suite: "ROMA", diaria: 280.00},
  {suite: "OMEGA", diaria: 200.00},
  {suite: "GARDEN", diaria: 180.00},
  {suite: "MASTER", diaria: 220.00},
  {suite: "GOLD", diaria: 340.00},
  {suite: "ROYAL", diaria: 320.00},
  {suite: "SILVER", diaria: 250.00},
  
  ];


var chegada = new Date(entrada);
var partida = new Date(saida);

var timeDiff = Math.abs(chegada.getTime() - partida.getTime());
var diffDays = Math.ceil(timeDiff / (1000 *3600*24))
















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
          hospede4: hospede4,
          total_dias: 40,
          valor_reserva: 1400.00
        });

     res.render('resumo')
     console.log(diffDays)

        }
      };



         module.exports = bookingController;
