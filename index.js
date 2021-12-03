const express = require('express');

const mongoose = require('mongoose');

const app = express();

const router = require('./routes/index');

const userRouter = require('./routes/user');

app.use(express.json())

app.use('/user', userRouter);

const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect('mongodb://mongoadmin:secret@159.223.74.10:27017/votunglam?authSource=admin', options, error => {
    if (error) {
        console.log("Mongo not connected");
    } else {
        console.log("Mongo connected");
    }
});

app.listen(3000, () => {
    console.log("server start at 3000") 
})