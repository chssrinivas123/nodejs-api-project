const express=require('express')
const student=require('../models/model')
const stuController=require('../controllers/controller')
const router=express.Router()
// get,post,put
router.post('/stu',stuController.createStudent)
router.get('/get',stuController.getAllStudents)
module.exports= router