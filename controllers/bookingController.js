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
    const {id} = req.params;
    const reserva = await db.Reserva.findOne({
      where: {id: id},
    })
    .then(res.render("resumo", {reserva}))
    .catch(err => console.log(err));
  },

  reservar: async function(req, res, next){
    const { entrada, saida, hospedes, suites, hospede1, hospede2, hospede3, hospede4  } = req.body;

    var chegada = new Date(entrada);
    var partida = new Date(saida);
    var timeDiff = Math.abs(chegada.getTime() - partida.getTime()); 
    var diffDays = Math.ceil(timeDiff / (1000 *3600*24));   
    var objeto = null;   
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
        })
        .then(res.render("resumo", {valor_total, entrada, saida, hospede1, hospede2, hospede3, hospede4}))
        .catch(err => console.log(err));
        },
};

module.exports = bookingController;
