
const reserva = [];
const precos = [

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

     res.render('resumo');
     console.log(reserva, valor_total);
  

        }
};

         module.exports = bookingController;
