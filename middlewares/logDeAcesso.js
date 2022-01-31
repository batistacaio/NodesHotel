const fs = require('fs');
const moment = require('moment');
var data = new Date().valueOf();
var formatado = moment(data).format('MMMM Do YYYY, h:mm:ss a');

function logDeAcesso(req, res, next){
    fs.appendFileSync('log.txt', formatado + ' - O usuário entrou na URL: '+ req.url + "\n")

    next();
}


module.exports = logDeAcesso;