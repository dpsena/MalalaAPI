const express= require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const {conectBD} =require('./db')
const app=express()
app.use(cors())
app.use(bodyParser.json())
conectBD()

require('./routers/user')(app)
require('./routers/record')(app)
require('./routers/appointment')(app)
require('./routers/payment')(app)




app.listen(3001,()=>{
    console.log('servidor ATARAXIA')
})