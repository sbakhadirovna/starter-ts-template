import { Handler } from '../../shared/types';
import { addRole } from './add-role';
import { editRole } from './edit-role';
import { listRoles } from './list-roles';
import { removeRole } from './remove-role';
import { showRole } from './show-role';


export const postRole : Handler =async (req,res,next)=>{
    try{
        const data =await addRole(req.body);
        res.json({data})
    }catch(error){
        next(error)
    }
}

export const getRoles:Handler=async(req,res,next)=>{
    try {
        const data=await listRoles(req.query)
        res.json(data)
    } catch (error) {
        next(error)
    }
}

export const getRole : Handler =async (req,res,next)=>{
    try{
        const data =await showRole(req.params.id);
        res.json({data})
    }catch(error){
        next(error)
    }
}
export const patchRole: Handler =async (req,res,next)=>{
    try{
        const data =await editRole(req.params.id,req.body);
        res.json({data})
    }catch(error){
        next(error)
    }
}

export const deleteRole: Handler =async (req,res,next)=>{
    try{
        const data =await removeRole(req.params.id);
        res.json({data})
    }catch(error){
        next(error)
    }
}
