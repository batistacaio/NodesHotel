
const reserva = [];
const tabela = [

  {suite :"PLAZA", diaria: 240.00},
  {suite: "ROMA", diaria: 280.00},
  {suite: "OMEGA", diaria: 200.00},
  {suite: "GARDEN", diaria: 180.00},
  {suite: "MASTER", diaria: 220.00},
  {suite: "GOLD", diaria: 340.00},
  {suite: "ROYAL", diaria: 320.00},
  {suite: "SILVER", diaria: 250.00},
  
  ];


const bookingController = {

  showResumo: function(req,res,next){
    res.render('resumo')
  },

  reservar: function(req, res, next){
    const { entrada, saida, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;


var chegada = new Date(entrada);
var partida = new Date(saida);

var timeDiff = Math.abs(chegada.getTime() - partida.getTime());//converter datas em numeros absolutos e subtrair//
var diffDays = Math.ceil(timeDiff / (1000 *3600*24));//pegar o resultado da subtração e transformar em dias//
var valor_diaria = tabela[2].diaria;

var valor_reserva = valor * diffDays

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

        });

     res.send(reserva);
     console.log(reserva);
  

        }
};



         module.exports = bookingController;
