//check username, password in post(login) request
//if exist create new jwt
// send back to front-end

//setup authentication so only the request with JWT access the dashboard

const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req,res)=>{
    const {username,password} = req.body

    if(!username || !password){
        throw new BadRequestError('Please provide email and password')
    }

    console.log(username,password)
    // just for demo
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    //res.send('Fake Login/Register/Signup Route')
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) =>{
    //console.log(req.headers)
    //console.log(req.user)
    
        const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg: `Hello, ${req.user.username}`,secret: `Here is your authorized date, your lucky number is ${luckyNumber}`})
   
    
}

module.exports = {login,dashboard}