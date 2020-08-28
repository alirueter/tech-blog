const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');

const sess = {
    secret: 'HydRO',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // 15 minutes
    maxAge: 900000,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sess));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});