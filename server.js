const express =require("express");
const app = express();
const connectDB=require('./config/connectDB')

//middleware remplaçant body-parser
app.use(express.json())

//Connect to DB
connectDB()

//Routes
app.use('/contacts', require('./routes/contact'))

//Run server
const port = process.env.port || 5000;

app.listen(port, err=>err ? console.log("erreur") : console.log(`Serveur running on ${port}`))