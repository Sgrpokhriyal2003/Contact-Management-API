const express = require("express");
const start = Date.now();


const myLogger = (req, res, next) => {
    try{
        console.log(`[${new Date().toLocaleString()}]: request made to ${req.originalUrl}`);
        next();
    }
    catch(err){
        return res.status(404);
        throw new Error({message: "Unauthorized"});
    }
};


module.exports = myLogger;