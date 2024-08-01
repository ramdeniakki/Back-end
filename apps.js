const express = require('express')
const app = express();
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("form")
})

app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send('Form is sent to the console.')
})


app.listen(3000,()=>{
    console.log("Listening at the Port 3000")
})