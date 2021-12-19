process.env.NODE_ENV = process.env.CONFIG_ENV || 'development'

const express = require('express')
const path = require('path')
const app = express()

app.set('views', './views')
app.set('views','dust')
app.set('view cache', true)

const port = process.env.PORT || 3000 
app.listen(port, () => {
})
