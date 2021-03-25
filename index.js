const express = require('express')
const routes = require('./server/routes')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/', routes);
app.get('*', (_, res) => {
  res.send('Hello World!')
})

app.listen(port);
