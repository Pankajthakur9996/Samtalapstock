const express=require('express');
const Router=express.Router();
const otpButton=require('../controllers/otp')
const createAccount=require('../controllers/createAccount')
const signin=require('../controllers/signincontroller')
Router.post('/otp',otpButton)
Router.post('/login',signin)
Router.post('/create',createAccount);
module.exports=Router;