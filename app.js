// // introduction to Ejs

// const express = require('express')
// const app = express();
// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//     res.render("index")
// })
// app.get('/profile',(req,res)=>{
//     res.send("profile")
// })

// app.listen(3000)

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.render('form'); 
});

app.post('/create', (req, res) => {
    console.log(req.body); 
    res.send('Form data received!');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


