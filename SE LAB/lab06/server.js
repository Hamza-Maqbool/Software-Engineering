const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3006;
const bodyparser= require('body-parser')
require('./utils/bd');
const productRouter = require('./routes/productRoutes')


//Middleware
app.use(bodyparser.json());


// first argument is end point / it could be like /user or /user/invoice or /user/account // API starter CAlls
app.use('/api',productRouter);



app.listen(PORT,()=>{
    console.log('App is listening on this port',PORT);
})