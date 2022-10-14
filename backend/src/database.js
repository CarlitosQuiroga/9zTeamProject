const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0.mgwreog.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url,{
    useNewUrlParser : true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
});