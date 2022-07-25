const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
//Had to adjust port to fix Heroku deployment

//const PORT = process.env.PORT || 3001;
const PORT = http.createServer(process.env.PORT || 3000);

// const server = http.createServer(process.env.PORT || 3000);
app.set("port",PORT);

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'bigbluedog',
  cookie: {
        // Session will expire in 30 minutes automatically
        expires: 30 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// Connect to database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});