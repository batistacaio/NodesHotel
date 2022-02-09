const reserva = [];

const diarias = [

{suite :"PLAZA", diaria: 240.00},
{suite: "ROMA", diaria: 280.00},
{suite: "OMEGA", diaria: 200.00},
{suite: "GARDEN", diaria: 180.00},
{suite: "MASTER", diaria: 220.00},
{suite: "GOLD", diaria: 340.00},
{suite: "ROYAL", diaria: 320.00},
{suite: "SILVER", diaria: 250.00},

]

const bookingController = {
    reservar: function(req, res, next){

      
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
          hospede4: hospede4,

          });
          


          console.log(reserva)
          res.redirect('/booking')

}
};

module.exports = bookingController;
