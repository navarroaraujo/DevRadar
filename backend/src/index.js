const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://navarroaraujo:rf3FjMFaGB99Pwc@cluster0-kas56.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);