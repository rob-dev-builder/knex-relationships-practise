var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:userid', function (req, res) {
  db.getProfile(req.params.userid ,req.app.get('connection'))
    .then(function (profiles) {
      let viewData = profiles[0]
      res.render('profileView', viewData)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/add', function (req, res) {
  res.render('addUser')
})


router.post('/add', function (req, res){

    let newUserObj = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }

console.log('new user object is: ' + newUserObj)

    db.addUser(newUserObj,req.app.get('connection'))
      .then(function (result) {
        db.addProfile(newUserObj, result[0], req.app.get('connection'))
      .then(function(){
          res.redirect('/')
        })
      })
})

module.exports = router
