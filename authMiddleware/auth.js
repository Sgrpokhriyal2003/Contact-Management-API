const express = require("express");
const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
    try{
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;

        if(authHeader && authHeader.startsWith("Bearer")){
            token = authHeader.split(" ")[1];
    
            //verify token
            jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(401).json({err: "Validation Failed"});
            }
               req.user = decode.user
               next();
            });

        }
        else{
            return res.status(400).json({message: "token is missing"});
        }
        
    }

    catch(err){
        return res.status(500).json({message: "Server Side Error!"});
    }
};

module.exports = validateToken;