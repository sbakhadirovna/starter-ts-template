import express from 'express'
import {getRoles, postRole} from './_controllers'
import { validate } from '../../shared/middleware';
import { createRoleSchema, getRolesSchema } from './_schemas';

const router=express.Router();
router.post("/roles",validate(createRoleSchema),postRole)
router.get("/roles",validate(getRolesSchema),getRoles)
// router.get('/roles/:id',getRole)
// router.patch('/roles/:id',editRole)
// router.delete('/roles/:id',removeRole)


export default router