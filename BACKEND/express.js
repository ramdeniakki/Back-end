
// const express = require('express')
// const app = express();

// app.get("/",function(req,res){
//     res.send('Home page')
// })

// app.listen(3000)



// const express = require('express')

// const app = express();


// app.use(function(req,res,next){
//     console.log("Hello world")
//     next();
// })
// app.get('/',function(req,res){
//     res.send("Welcome page")
// })

// app.get('/about',function(req,res){
//     res.send("about page")
// })

// app.get('/contact',function(req,res){
//     res.send("contact page")
// })

// app.get('/service',function(req,res){
//     res.send("service page")
// })
// app.get("*",function(req,res){
//     res.send("Page not Found")
// })
// app.listen(3000)


///// Sessions


// const express = require('express')
// const app = express();
// const session = require("express-session")
// app.use(session({
//     secret:"random-key", // encrpted key
//     resave:false,
//     saveUninitialized:false
// }))

// app.get('/',function(req,res){
//     res.send("Home page")
// })

// app.get("/create",function(req,res,next){
//     req.session.polo =true;
//     res.send("created!")
// })

// app.get('/checks',function(req,res,next){
//     console.log(req.session.polo);

// })

// app.listen(3000);

// / connect the flash

// const express  = require('express')
// const app = express();
// const session =  require('express-session')
// const flash = require('connect-flash')

// app.use(session({
//     secret:"value",
//     resave: false,
//     saveUninitialized: false
// }))


// app.use(flash())


// app.get('/',(req,res,next)=>{
//     req.flash('error',"invalid credentials")
//     res.redirect('/error')
// })


// app.get('/error',(req,res,next)=>{
//     let message = req.flash('error')
//     res.send(message)
// })


// app.listen(3000)



// const express = require('express')
// const app = express();

// const cookie = require('cookie-parser')

// app.use(cookie())

// app.get('/',(req,res,next)=>{
//     res.send('hey')
// })



// app.get('/check',(req,res,next)=>{
//     console.log(req.cookies.banned)
//     res.send("Checking")
// })


// app.get('/banned',(req,res,next)=>{
//     res.cookie("banned","true")
//     res.send("Banned")
// })


// app.listen(3000)






// Dynamic Routing:



// const express = require('express')
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Welcome page')
    
// })


// app.get('/profile/:username/:age',(req,res,next)=>{
//     res.send(`Hello this is ${req.params.username} ${req.params.age} old software developer `)
// })

// app.listen(3000)






