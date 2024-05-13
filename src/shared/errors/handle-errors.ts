import { NextFunction, Request, Response } from "express";
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} from "./index";

function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let status = 500;
  let errorMessage = "Internal Server Error";
  if (err instanceof NotFoundError) {
    status = 404;
    errorMessage = err.message || "Not Found";
  } else if (err instanceof BadRequestError) {
    status = 400;
    errorMessage = err.message || "Bad Request";
  } else if (err instanceof UnauthorizedError) {
    status = 401;
    errorMessage = err.message || "Unauthorized";
  } else if (err instanceof ForbiddenError) {
    status = 403;
    errorMessage = err.message || "Forbidden";
  }

  console.error(err);

  res.status(status).json({
    error: errorMessage,
  });
}

export default handleErrors;
