import  { NextFunction, Response } from "express";
import{
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} from "./index";


function handleErrors(err:Error,res:Response,req:Request,
  next:NextFunction) {
  let status = 500;
  if (err instanceof NotFoundError) status = 404;
  else if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddenError) status = 403;

  res.status(status).json({
    error: err.message,
  });
}
export default handleErrors;
