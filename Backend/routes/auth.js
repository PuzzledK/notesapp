/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body,validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchUser = require('../middlewares/Getuser');

const sec_key = process.env.SECRET_TOKEN;
//ROUTE 1 Create user using POST "/api/auth", Doesn't require Auth

router.post('/createuser',[
    body('name','Enter Valid Name').isLength({min : 3}),
    body('email','Enter Valid Email').isEmail(),
    body('password','Minimum password length is 5 words').isLength({min : 5})
],

async (req,res)=>{
    let sucess = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    //Check user with this email already exists
    try{
    let user = await User.findOne({email:req.body.username})

    if(user){
        sucess = false;
        return res.status(400).json({error:"User Already exists",sucess})
    }
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password,salt);

    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:securePass,
    })

    const data = {
        user:{
            id : user.id
        }
    }

    const authToken = jwt.sign(data,sec_key);
    sucess = true;
    res.json({authtoken:authToken,sucess});
}catch(err){
    sucess = false;
    console.log(err.message);
    res.status(500).json({msg:"Some error occured",sucess})
}
})

//ROUTE 2 Authenticating User on /api/auth/login.
router.post('/login',[
    body('email','Enter valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],
async (req,res) => {

//checking for errors and returning errors if exists
let sucess = false;
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({error : errors.array()})
}
//Storing Inputs
const {email,password} =req.body;

try{
//Finding user in Database
let user = await User.findOne({email});

//Handling User not in database
if(!user){
    return res.status(400).send("Incorrect Credentials")
}

//comparing passwords
const passwordCompare = await bcrypt.compareSync(password,user.password);

if(!passwordCompare){
   sucess = false;
return res.status(400).json({msg:"Incorrect credentials",sucess})
}
//Sending data if password matched
const payload = {
    user : {
        id : user.id,
    }
}

//Creating token and sending to server
const authToken = jwt.sign(payload,sec_key);
sucess = true;
res.json({authToken:authToken,sucess})

}catch(err){
console.error(err.message);
res.status(400).send("Some error occured");
}

})

//ROUTE 3 Getting loggedIn user details using POST at 'api/auth/getuser',Login is required.
router.post('/getuser',fetchUser,async (req,res)=>{
try{

const userId = req.user.id;
const user = await User.findById(userId).select('-password');
res.send(user);

}catch(err){

}
})

module.exports = router