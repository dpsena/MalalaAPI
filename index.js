const express= require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const {conectBD} =require('./db')
const port = process.env.PORT ||3001

const app=express()
app.use(cors())
app.use(bodyParser.json())
conectBD()

require('./routers/user')(app)
require('./routers/record')(app)
require('./routers/appointment')(app)
require('./routers/payment')(app)
require('./routers/ataraxia')(app)
require('./routers/billing')(app)





app.listen(port,()=>{
    console.log('servidor ATARAXIA')
})