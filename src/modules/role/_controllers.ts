import { Handler } from '../../shared/types';
import { addRole } from './add-role';
import { listRoles } from './list-roles';


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

// export const getRole : Handler =async (req,res,next)=>{
//     try{
//         const data =await showRole(req.body);
//         res.json({data})
//     }catch(error){
//         next(error)
//     }
// }
