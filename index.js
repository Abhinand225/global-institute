
// import express
const express=require('express')

const dataService =require('./service/dataService')

// import cors
const cors= require('cors')

// create an application
const app=express();

// use jsin parse for server response
app.use(express.json())

// using cors specify the origin
app.use(cors({
    origin:['http://localhost:4200']
}))

// import jwt token
const jwt = require('jsonwebtoken')

// setup port number
app.listen(3000,()=>{
    console.log('listening to port 3000');
})

// application specific middleware

const appMiddleware = (req,res,next)=>{
    console.log('application specific middleware');
    next();
}
app.use(appMiddleware)


// router specific middleware

const jwtRouterMiddleware = (req,res,next)=>{
    try{
        console.log('router specific middleware');
        const token=req.headers['x-token'];
        const data=jwt.verify(token,'superkey');
        console.log(data);
        next();
    }
    catch{
        res.status(422).json({
            statusCode:422,
            status:false,
            message:'please login first'
        })
    }
    
}




app.post('/register',(req,res)=>{
    dataService.register(req.body.name,req.body.number,req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    ) 
})


app.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
       
})


app.get('/view-course',(req,res)=>{
    dataService.getCourse().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.get('/view-all/:id',(req,res)=>{
    dataService.viewCourse(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.post('/apply',(req,res)=>{
    dataService.apply(req.body.name,req.body.place,req.body.gender,req.body.email,req.body.number,req.body.qualification,req.body.collegename,req.body.year).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    ) 
})


app.post('/addcourse',(req,res)=>{
    // console.log(req.body);
    dataService.addcourse(req.body.id,req.body.title,req.body.image,req.body.description,req.body.user).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


app.get('/getcourse',(req,res)=>{
    dataService.getcourse().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})