var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  res.sendFile('/app/index.html');
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
