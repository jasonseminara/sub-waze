// REPORTS ROUTER
'use strict'
const express    = require('express')
const bodyParser = require('body-parser')
const reports    = express.Router();
const mtaService = require('../service/mtaService')

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

reports.get( '/new', mtaService.listLines,  (req,res)=>{
  console.log(res.lines)
  res.render('report_new', {lines:res.lines})
})

// reports.route('/:id/edit')


reports.route('/:id')
  .get((req,res)=>{
    res.send(`show ${req.params.id} report`)
  })
  .put((req,res)=>{
    res.send(`update ${req.params.id} report`)
  })
  .delete((req,res)=>{
    res.send(`delete ${req.params.id} report`)
  })


reports.route('/')
  .get((req,res)=>{
    res.send('list reports')
  })
  .post(urlencodedParser, mtaService.create, (req,res)=>{
    // todo: render the report_list page
    res.json(req.body)
  })

module.exports = reports;
