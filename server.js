const express = require('express')
const app     = express()

app.get('*', (req, res) => {
  // REDIRECT goes here
  res.redirect('exp://192.168.0.100:19000')
})

app.set('port', (process.env.PORT || 3000))
const server = app.listen(app.get('port'), () => {})

//npx lt --port 3000 --subdomain express-server