const express =require('express')
const userServices=require('./users.services')
const authorize = require("../helpers/authorize")

const router=express.Router();

router.post('/newuser', CreateNewUser)
router.post('/signin', signIn)

module.exports=router

function CreateNewUser(req, res, next){
    userServices.CreateNewUser(req.body)
    .then(response=>res.json(response))
    .catch(next =>{
        if(next.code===11000){
            res.status(404).send({message:'Mobile number already exists'})
        }
    }
        )
}

function signIn(req, res, next){
    userServices.signIn(req.body)
    .then(response=>res.json(response))
    .catch(next) 
}