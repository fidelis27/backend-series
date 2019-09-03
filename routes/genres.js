const express = require('express')
const router = express.Router()  
const genresControllers = require('../controllers/genres')

  
 router.post('/genre/', genresControllers.storeGenres)    
 router.get('/genre/', genresControllers.indexGenres)
 router.get('/genre/:id', genresControllers.showGenres)
 router.put('/genre/:id', genresControllers.updateGenres)
 router.delete('/genre/:id', genresControllers.removeGenres) 

 module.exports = router