const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try{

        const {username , email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "All Fields Are Mandatory"});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User Already Exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });
        
        newUser.save();

        console.log("user registered successfully!")
        return res.status(201).json({_id: newUser.id, email: newUser.email});

    }
    catch(err){
        return res.status(404).json({message: "Error In Registering User"})
    }
}
const loginUser = async (req, res) => {

    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Enter Username And Password"});
        }
        
        const user = await User.findOne({email});

        //compare password with stored password
        if(user && (await bcrypt.compare(password, user.password))){
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            }, process.env.JWT_SECRET, {expiresIn: "24h"});

            console.log("login a user");
            return res.status(200).json({accessToken});
        }
        else{
            return res.status(401).json({message: "Email And Password Does Not Valid"})
        }
    }
    catch(err){
        return res.status(404).json({message: "Error In Login User"})
    }

}
const currentUser = async (req, res) => {
    try{
        return res.status(200).json(req.user);
    }
    catch(err){
        return res.status(404).json({message: "Error In Current User"})
    }
}

module.exports = {
    registerUser,
    loginUser,
    currentUser
}