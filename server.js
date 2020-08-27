const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const session = require('express-session');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(session(sess));
// add public directory if needed?
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});