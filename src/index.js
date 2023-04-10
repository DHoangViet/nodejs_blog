const express = require('express')
const morgan = require('morgan')
const { create } = require('express-handlebars')
const path = require('path')
const app = express()
app.use(morgan('combined'))
const port = 3000

//static files
app.use(express.static(path.join(__dirname, 'public')))
// console.log('path.join(__dirname: ', path.join(__dirname)); // C:\Users\Admin\Desktop\Seft Learning\blog\src === path of index.js file

//config template engine (handlebars)
const hbs = create({ extname: '.hbs'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//render page
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})