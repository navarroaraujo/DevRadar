const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://navarroaraujo:rf3FjMFaGB99Pwc@cluster0-shard-00-00-kas56.mongodb.net:27017,cluster0-shard-00-01-kas56.mongodb.net:27017,cluster0-shard-00-02-kas56.mongodb.net:27017/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);