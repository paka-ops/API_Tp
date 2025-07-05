const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
const swaggerUI = require('swagger-ui-express')
const csrf = require('csurf');
const cookies = require('cookie-parser')
const swaggerJSDoc = require('swagger-jsdoc')
const dotenv = require("dotenv")
dotenv.config();
const connectDb = require("./CRUD/Configs/database");
const productRoutes = require('./CRUD/Routers/productRoute');
const usersRoutes = require('./CRUD/Routers/userRoutes')
const profilesRoutes = require("./CRUD/Routers/profileRouter")
const auth = require('./CRUD/middleware/auth')
const { getProductById } = require('./CRUD/Controller/productController');

const corsOptions ={
    origin:"https://univ-uk.tg",
    methods: ['GET','POST','PUT','PATCH'],

}


connectDb();
app.listen(5000,()=>{
    console.log("server start on " + 5000)
})


app.use( productRoutes);
app.use('/users',usersRoutes)
app.use("/profiles",profilesRoutes);
app.use(cors())





