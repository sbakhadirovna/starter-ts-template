import Joi from "joi";
import { ValidateSchema } from "../../shared/middleware";

export const createUserSchema: ValidateSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().min(3).required(),
    lastName: Joi.string().trim().min(3).required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().trim().min(4).required(),
    roleId: Joi.number().integer().required(),
  }),
};
export const getUsersSchema: ValidateSchema = {
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid(
      "roleId",
      "firstName",
      "lastName",
      "cratedAt",
      "updatedAt"
    ),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
};

export const getUserSchema: ValidateSchema = {
  params: Joi.object({
    id: Joi.string().hex().length(24),
  }),
};

export const updateUserSchema: ValidateSchema = {
  ...getUserSchema,
  body: Joi.object({
    firstName: Joi.string().trim().min(3),
    lastName: Joi.string().trim().min(3),
    email: Joi.string().email().trim(),
    password: Joi.string().trim().min(4),
    roleId: Joi.number().integer(),
  }),
};
