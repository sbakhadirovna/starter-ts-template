const express=require('express')
const jwt= require('jsonwebtoken')
const config = require("../config");
const { UnauthorizedError } = require("../errors");



function isLoggidIn(req,res,next){
    const {authorization}=req.headers;
if(!authorization){
    new(new UnauthorizedError("Unauthorized"));
    return
}

const [type,token]=authorization.split(' ');
switch(type){
    case 'Bearer':{
        if(!token){
            next(new UnauthorizedError("Unauthorized"))
            return
        }
        try{
            const payload=jwt.verify(token,config.jwt.secret,{
                ignoreExpiration:false,
            })
            req.user=payload.user
            next();
        }catch(error){
            console.log(error);
            next(new UnauthorizedError("Unauthorized"))
        }
        break;
    }
    default:{
        next(new UnauthorizedError("Unauthorized"))
        break;
    }


}

    
}

module.exports=isLoggidIn;