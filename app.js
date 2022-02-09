var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var contatoRouter = require("./routes/contato");
var suitesRouter = require("./routes/suites");
var reservasRouter = require("./routes/reservas")
var cadastrar_Router = require("./routes/cadastrar_Router");
var login_Router = require('./routes/login_Router');
var logMiddleware = require('./middlewares/logDeAcesso');
var booking_Router = require('./routes/booking_Router')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'Nodes Hotel',
  resave: false,
  saveUninitialized: true,
}));
app.use(logMiddleware);

app.use('/', indexRouter);
app.use("/contato", contatoRouter);
app.use("/suites", suitesRouter);
app.use("/reservas", reservasRouter);
app.use("/cadastrar", cadastrar_Router);
app.use('/logar', login_Router);
app.use('/logout', function(req, res){req.session.destroy(); res.send("usuario deslogado")});
app.use('/booking',booking_Router);


app.use((req, res, next)=>{
  return res.status(404).render('tela_de_erro');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
