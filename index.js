const express= require('express')
const {conectBD} =require('./db')
const app=express()
conectBD()
app.listen(135,()=>{
    console.log('servidor ATARAXIA')
})