const express=require('express');
const upload=require('../utils/multerConfig')
const Router=express.Router();
const {addProduct,deleteProduct,editProduct}=require('../controllers/stock/addDatabase')
const otpButton=require('../controllers/otp')
const DataFetch=require('../controllers/dataFetch')
const createAccount=require('../controllers/createAccount')
const signin=require('../controllers/signincontroller')
Router.post('/otp',otpButton)
Router.post('/login',signin)
Router.post('/create',createAccount);
Router.post('/admin/addProduct',upload.array("images", 5),addProduct);
Router.delete('/admin/delProduct/:_id',deleteProduct);
Router.put('/admin/editProduct/:_id',upload.array("images", 5),editProduct);
Router.get('/products',DataFetch)
module.exports=Router;