import express from 'express'
import {deleteRole, getRole, getRoles, patchRole, postRole} from './_controllers'
import { validate } from '../../shared/middleware';
import { createRoleSchema, getRoleSchema, getRolesSchema, updateRoleSchema } from './_schemas';

const router=express.Router();
router.post("/roles",validate(createRoleSchema),postRole)
router.get("/roles",validate(getRolesSchema),getRoles)
router.get('/roles/:id',validate(getRoleSchema),getRole)
router.patch('/roles/:id',validate(updateRoleSchema),patchRole)
router.delete('/roles/:id',validate(getRoleSchema),deleteRole)


export default router