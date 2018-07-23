const express = require('express'),
      bodyParser = require('body-parser'),
      mountRoutes = require('./routes')

const app = express();
mountRoutes(app);


//App configurations
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(process.env.PORT || 9000, function () {
      console.log('Server is listening on port 9000');
});