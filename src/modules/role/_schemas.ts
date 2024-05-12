import Joi from "joi";
import { ValidateSchema } from "../../shared/middleware";
import { Permission } from "../../shared/types";



export const createRoleSchema:ValidateSchema={
    body:Joi.object({
        name:Joi.string().trim().required(),
        permission:Joi.array()
        .items(Joi.string().valid(...Object.values(Permission)))
        .required().min(1)
    })
}
export const getRolesSchema:ValidateSchema={
    query:Joi.object({
        q:Joi.string().min(1),
        sortBy:Joi.string().valid("name","cratedAt","updatedAt"),
        order:Joi.string().valid('ASC',"DESC"),
        offset:Joi.number().integer().min(0),
        limit:Joi.number().integer().min(1)
    })
}

export const updateRoleSchema:ValidateSchema={
    body:Joi.object({
        name:Joi.string().trim(),
        permission:Joi.array()
        .items(Joi.string().valid(...Object.values(Permission)))
        .min(1)
    })
}