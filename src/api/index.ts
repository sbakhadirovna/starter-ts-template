import express from'express';
import handleErrors from'../shared/errors/handle-errors'
import exampleRoutes from '../modules/example/_routes'
import roleRoutes from '../modules/role/_routes'




const router=express.Router();
router.use(roleRoutes)
router.use(exampleRoutes);
router.use(handleErrors)



export default router;