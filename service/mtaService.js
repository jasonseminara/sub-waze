//es6 uses deconstructors
const {MongoClient}    = require('mongodb')

const dbConnection   = 'mongodb://localhost:27017/transit'


module.exports = {
  //es5 syntax searchMovies:function(){}

  // middleware needs req,res,next
  listLines(req,res,next){

    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err

      db.collection('lines')
        .find( )
        .sort( {key:1} )
        .toArray( function(err, data){

          if(err) throw err
          //get the data back
          res.lines = data
          next()
        })
    })
  },

  create(req,res,next){
    // insert the current time, for accounting
    req.body.insertionTime = Date.now()
    console.log(req.body)

    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err
      // todo: validate form here
      db.collection('incidents')
        .insertOne(req.body, function(err,result){
          if(err) throw err
          console.log(result)
          next()
        })
    })
  },

  listIssues(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err

      db.collection('incidents')
        .find( )
        .sort( {key:1} )
        .toArray( function(err, data){

          if(err) throw err
          //get the data back
          res.lines = data
          next()
        })
    })
  }
}
