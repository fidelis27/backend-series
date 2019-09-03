const express = require('express')
const router = express.Router()  
const usersControllers = require('../controllers/users')

  
 router.post('/user/', usersControllers.storeUsers)    
 router.get('/user/', usersControllers.indexUsers)
 router.get('/user/:id', usersControllers.showUsers)
 router.put('/user/:id', usersControllers.updateUsers)
 router.delete('/user/:id', usersControllers.removeUsers) 

 module.exports = router