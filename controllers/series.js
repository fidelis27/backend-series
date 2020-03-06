

const requireDir = require('require-dir')
require('../db')
const mongoose = require('mongoose')

requireDir('../models/')
const Series = mongoose.model('Series')


module.exports = {
    async indexSeries(req, res) {
        console.log("requisição index")
        const series= await Series.find()
        return res.json(series)        
    },   
    async showSeries(req, res) {
        console.log("requisição showseries")
        const serie= await Series.findById(req.params.id)
        console.log(serie)
        return res.json(serie)        
    }, 
    async showSeriesByGenre(req, res) {
        console.log("requisição showseries")
        const series= await Series.find({genre:req.params.genre})
               
        return res.json(series)        
    }, 
    async updateSeries(req, res) {

     
       const { name, status, genre, comments } = req.body;
        const _id = req.params.id;
        await Series.findByIdAndUpdate(
            _id,  {          
            name,
            status,
            genre,
            comments
        })
        const se = await Series.find({_id: req.params.id})
        
        
         return res.json(se)       
    },   
    async storeSeries(req,res){
        const { name, status, genre, comments } = req.body;
        const serie = await Series.create({
            name,
            status,
            genre,
            comments

        })
        return res.send(serie)
        
    },
    async removeSeries(req, res) {
        console.log("requisição remove")
        const series= await Series.findByIdAndRemove(req.params.id)
        return res.json(series)        
    }, 
    
}