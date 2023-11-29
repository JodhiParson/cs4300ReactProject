const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const mongoose = require('mongoose');
const cors = require('cors');

  

//connect database
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('Hello world!'));



const conn_str = 'mongodb+srv://dw05164:Wang0508@cluster0.xpvhxg6.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB Connection');
});

const items = require('./routes/api/recipes');
app.use('/api/items', items);

app.get('/user/:id', (req,res) => {
    res.send('user $req.params.id')
})
