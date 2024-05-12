import express from "express";
import Joi from "joi";
import { Handler } from "../types";


export type ValidateSchema={
    body?:Joi.Schema,
    params?:Joi.Schema,
    query?:Joi.Schema
}
export function validate(schema:ValidateSchema):Handler {
  return function (req, res, next) {
    if(schema.body){
        const{error,value}=schema.body.validate(req.body);
        if(error){
            return res.status(400).json({error:error.details[0].message})
        }
        req.body = value;
    }
   
    if(schema.query){
        const{error,value}=schema.query.validate(req.query);
        if(error){
            return res.status(400).json({error:error.details[0].message})
        }
        req.query = value;
    }
    if(schema.params){
        const{error,value}=schema.params.validate(req.params);
        if(error){
            return res.status(400).json({error:error.details[0].message})
        }
        req.params = value;
    }
    next();
}
}
