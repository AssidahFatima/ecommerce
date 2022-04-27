const express = require('express');
const mongoose=require('mongoose');
const categoryRouter =require('./routes/api/dashboard/CategoriesRouter');
const bodyParser=require('body-parser');




const app=express();

app.use(bodyParser.json());
const cors=require('cors');
app.use(cors())

const db=require('./config/keys').mongoURI;

mongoose
        .connect(db)
        .then(()=>console.log('MongoDB Connected ...'))
        .catch(err=>console.log(err));


// Routes
app.use("/api/category", categoryRouter);

//app.use('/api', categoryRouter);



const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));