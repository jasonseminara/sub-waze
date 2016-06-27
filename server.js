/* set up the Tom Cruise Movie  DB */
'use strict'
const express         = require('express')
const logger          = require('morgan')
const path            = require('path')
const env             = require('dotenv')
const app             = express()
const PORT            = process.env.PORT || process.argv[2] || 3000

// set up logging so that we can see what's happening
app.use( logger('dev') )

// set up ejs to render the views
app.set('view engine', 'ejs')

// setting out static assets directory
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

/* ROUTES */

// home
app.get('/', function(req,res){
  res.render('home')
})

