// REPORTS ROUTER
'use strict'
const express    = require('express')
const bodyParser = require('body-parser')
const issues    = express.Router();
const mtaService = require('../service/mtaService')

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

issues.get( '/new', mtaService.listLines,  (req,res)=>{
  res.render( 'issue_new' , {lines:res.lines,exits:{create:'/issues'}} )
})


issues.route('/:id')
  .get((req,res)=>{
    res.send(`show ${req.params.id} report`)
  })
  .put((req,res)=>{
    res.send(`update ${req.params.id} report`)
  })
  .delete((req,res)=>{
    res.send(`delete ${req.params.id} report`)
  })


issues.route('/')
  .get((req,res)=>{
    res.send('list issues')
  })
  .post(urlencodedParser, mtaService.create, (req,res)=>{
    // todo: render the report_list page

    res.redirect('/')
  })

module.exports = issues;
