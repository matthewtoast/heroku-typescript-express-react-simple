import * as path from 'path';
import * as express from 'express';
import * as handlebars from 'express-handlebars';
import * as morgan from 'morgan';

const config = require('./config');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars({
  defaultLayout: path.join(__dirname, 'templates', 'main.handlebars'),
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'templates'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

app.use(morgan('short'));

app.get('/', (req, res) => {
  return res.render('react', {title: config.title});
});

app.use((req, res) => {
  return res.render('404', {title: 'Page not found!'});
});

app.listen(PORT, () => {
  console.info(`> Express server listening @ ${PORT}`);
});
