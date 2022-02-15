const db = require("../database/models");
const { Op } = require("sequelize");

const precos = [
  {suite :"PLAZA", diaria: 240.00},
  {suite: "ROMA", diaria: 280.00},
  {suite: "OMEGA", diaria: 200.00},
  {suite: "GARDEN", diaria: 180.00},
  {suite: "MASTER", diaria: 220.00},
  {suite: "GOLD", diaria: 340.00},
  {suite: "ROYAL", diaria: 320.00},
  {suite: "SILVER", diaria: 250.00}
];

const bookingController = {

  showResumo: async function(req,res,next){
    var codReserva = req.params.id
    const reserva = await db.Reserva.findOne({
      where: {
        id: {[Op.eq]: codReserva}
      }
    })
    
    res.render('resumo', { hospede1_titular: reserva })
    console.log(reserva)
  },

  reservar: async function(req, res, next){
    const { entrada, saida, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;

    var chegada = new Date(entrada);
    var partida = new Date(saida);
    var timeDiff = Math.abs(chegada.getTime() - partida.getTime());     //>>>>>>converter datas em numeros absolutos e subtrair os valores//
    var diffDays = Math.ceil(timeDiff / (1000 *3600*24));      //>>>>>>pegar o resultado da subtração e transformar em dias//
    var objeto = null;      //>>>>>>identificar qual o valor da diaria de acordo com a suite escolhida na reserva usando o método FIND//
    objeto = precos.find(function(preco){

      if(preco.suite == suites){
      return preco;
   };
 });

var valor_total = null
var valor_total = (objeto.diaria * diffDays).toLocaleString('pt-br', {style: 'currency', currency: "BRL"});    //>>>>>Multimplicando o valor da diaria escolhida pela quantidade de dias e formatando para moeda nacional //



         await db.Reserva.create(
          {
          data_entrada: entrada,
          data_saida: saida,
          total_hospedes: hospedes,
          suite_name: suites,
          hospede1_titular: hospede1,
          hospede_2: hospede2,
          hospede_3: hospede3,
          hospede_4: hospede4,
        }).then(res.render("resumo",{valor_total}))
        },
};

module.exports = bookingController;
