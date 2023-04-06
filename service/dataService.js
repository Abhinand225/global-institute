// import jwt token
const jwt =require('jsonwebtoken')

// importing db.js
const db=require('./db')


const register=(name,number,email,password)=>{

    return db.User.findOne({email}).then(  //assynchronous call

    user=>{ 
      if(user){  //check wheather the user is exist in database or  not
        return{
          status:false,
          statusCode:401,
          message:'User already exist'
        }
      }
      else  // if the user is not exist then register the user
      {
        const newUser=new db.User({ //assign the user details to the newUser
          name:name,
          number:number,
          email:email,
          password:password
        })
        newUser.save() //the save the new user data yo mongo db
        return{
          status:true,
          statusCode:200,
          message:'Register successful'
        }
      }
    }

    )
}



const login=(email,password)=>{
  return db.User.findOne({email,password}).then(
    user=>{
      if(user){
        currentuser=user.name
        currentemail=email;
        number=user.number;
      // // token generation
      const token=jwt.sign({currentemail:email},'superkey')
      // super key will generate a number
      return {
        status:true,
        statusCode:200,
        message:"Login successful",
        token:token,
        currentuser:user.name,
        currentemail:email,
        number:user.number
      }
      }
      else
      {
        return{
            status:false,
            statusCode:404,
            message:"invalid Userdetails"
        }
      }
    }
  )
}


const getCourse=()=>{
  return db.Course.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                courses:result
            }
        }
        else
        {
            return{
                status:false,
                statusCode:402,
                message:'details not found'
            }
        }
    
    }
)
}


const viewCourse=(id)=>{
  return db.Course.find({id}).then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                courses:result
            }
        }
        else
        {
            return{
                status:false,
                statusCode:402,
                message:'details not found'
            }
        }
    
    }
)
}


const apply=(name,place,gender,email,number,qualification,collegename,year)=>{

  return db.Apply.findOne({email}).then(  //assynchronous call

  apply=>{ 
    if(apply){  //check wheather the user is exist in database or  not
      return{
        status:false,
        statusCode:401,
        message:'User already applied'
      }
    }
    else  // if the user is not exist then register the user
    {
      const newApply=new db.Apply({ //assign the user details to the newUser
        name:name,
        place:place,
        gender:gender,
        email:email,
        number:number,
        qualification:qualification,
        collegename:collegename,
        year:year
      })
      newApply.save() //the save the new user data yo mongo db
      return{
        status:true,
        statusCode:200,
        message:'Apply successfull'
      }
    }
  }

  )
  
}


const addcourse=(id,title,image,description,user)=>{
  return db.View.findOne({id}).then(
      (result)=>{
          if(result){
              return{
                  status:false,
                  statusCode:402,
                  message:'Course already applied'
              }
          }
          else{
              const newcourse=new db.View({
                  id,
                  title,
                  image,
                  description,
                  user
              })
              newcourse.save()
              return{
                  status:true,
                  statusCode:200,
                  message:'Applied successfully'
              }
          }
      }
  )
}

const getcourse=()=>{
  return db.View.find({}).then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  courses:result
              }
          }
          else
          {
              return{
                  status:false,
                  statusCode:402,
                  message:'course not found'
              }
          }
      
      }
  )
}


module.exports={
    register,
    login,
    getCourse,
    viewCourse,
    apply,
    addcourse,
    getcourse
}