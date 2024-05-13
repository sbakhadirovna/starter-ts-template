import express from 'express'
import {deleteUser, getUser, getUsers, patchUser, postUser} from './_controllers'
import { validate } from '../../shared/middleware';
import { createUserSchema, getUserSchema, getUsersSchema, updateUserSchema } from './_schemas';

const router=express.Router();
router.post("/users",validate(createUserSchema),postUser)
router.get("/users",validate(getUsersSchema),getUsers)
router.get('/users/:id',validate(getUserSchema),getUser)
router.patch('/users/:id',validate(updateUserSchema),patchUser)
router.delete('/users/:id',validate(getUserSchema),deleteUser)


export default router