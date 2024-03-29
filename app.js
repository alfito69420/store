const express = require('express')

require('./database/MongooseConnection')
const producRoutes = require('./routes/productRoutes')

const app = express()
const port = 3000


app.use('/api/v1', producRoutes)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))