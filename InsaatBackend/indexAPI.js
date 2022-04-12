//Requires ExpressJs Framework
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
//Include route files
const contentRouter = require('./src/routes/ContentRoutes');
const customerRoutes = require("./src/routes/CustomerRoutes");
const projectRoutes = require("./src/routes/ProjectRoutes");
//Express Framework
const app = express();
var path = require("path");

app.use(bodyParser.json());

//Start Listening Port
port="8085";
var server = app.listen(port, function () {
    console.log("Server Status:", "Server is running...");
  });

app.use(bodyParser.urlencoded({extended:true }));
app.use('/', contentRouter);
app.use("/", customerRoutes);
app.use("/", projectRoutes);

//Catch the broken links
app.use(function(req,res){
    res.status(404).send({url: `${req.originalUrl} not found!`});
});