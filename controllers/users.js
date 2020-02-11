

const requireDir = require('require-dir')
require('../db')
const mongoose = require('mongoose')

requireDir('../models/')
const Users = mongoose.model('Users')


module.exports = {
    async indexUsers(req, res) {
        const users= await Users.find()
        return res.json(users)        
    },  
    async showUsers(req, res) {
        const users= await Users.findById(req.params.id)
        return res.json(users)        
    }, 
    async storeUsers(req,res){
        const user = await Users.create({
           name: req.body.name, 
           email:req.body.email   
          
        })
        console.log(user)
        return res.json(user)
        
    }, 
    async updateUsers(req, res) {
        const { name , email } =  req.body
        const user = await Users.findByIdAndUpdate(
            req.params.id,  {          
            name,
            email         
        })
         return res.json(user) 
         console.log(user)      
    },   
    async removeUsers(req,res){
        const user = await Users.findByIdAndRemove(req.params.id)
        return res.json(user)
    }
    
}