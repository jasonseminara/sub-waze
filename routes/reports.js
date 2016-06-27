// REPORTS ROUTER
'use strict'
const express   = require('express')
const reports   = express.Router();


reports.get( '/new',(req,res)=>{
  res.send('new report form')
})

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
  .post((req,res)=>{
    res.send('receive report form, create a report')
  })

module.exports = reports;
