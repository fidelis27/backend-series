

const requireDir = require('require-dir')
require('../db')
const mongoose = require('mongoose')

requireDir('../models/')
const Genres = mongoose.model('Genres')


module.exports = {
    async indexGenres(req, res) {
        const genres= await Genres.find()
        return res.json(genres)        
    },  
    async showGenres(req, res) {
        const genres= await Genres.findById(req.params.id)
        return res.json(genres)        
    }, 
    async storeGenres(req,res){
        const genre = await Genres.create({
           name: req.body.name    
          
        })
        return res.json(genre)
       
    }, 
    async updateGenres(req, res) {
        
        const genre = await Genres.findByIdAndUpdate(
            req.params.id,  {          
            name: req.body.name            
        })
        
         return res.json(genre) 
           
    },   
    async removeGenres(req,res){
        const genre = await Genres.findByIdAndRemove(req.params.id)
        return res.json(genre)
    }
    
}