import express from 'express'
import {getHello} from './_controllers'

const router=express.Router();
router.get("/",getHello)

export default router