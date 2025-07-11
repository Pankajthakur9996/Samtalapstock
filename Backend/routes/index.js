const express=require('express');
const Router=express.Router();
const createAccount=require('../controllers/createAccount')
const otpBased=require('../controllers/otpcontroller')
Router.post('/login',otpBased)
Router.post('/create',createAccount);
module.exports=Router;