import { Handler } from '../../shared/types';
import { addUser } from './add-user';
import { editUser } from './edit-user';
import { listUsers } from './list-users';
import { removeUser } from './remove-user';
import { showUser } from './show-user';


export const postUser : Handler =async (req,res,next)=>{
    try{
        const data =await addUser(req.body);
        res.json({data})
    }catch(error){
        next(error)
    }
}

export const getUsers:Handler=async(req,res,next)=>{
    try {
        const data=await listUsers(req.query)
        res.json(data)
    } catch (error) {
        next(error)
    }
}

export const getUser : Handler =async (req,res,next)=>{
    try{
        const data =await showUser(req.params.id);
        res.json({data})
    }catch(error){
        next(error)
    }
}
export const patchUser: Handler =async (req,res,next)=>{
    try{
        const data =await editUser(req.params.id,req.body);
        res.json({data})
    }catch(error){
        next(error)
    }
}

export const deleteUser: Handler =async (req,res,next)=>{
    try{
        const data =await removeUser(req.params.id);
        res.json({data})
    }catch(error){
        next(error)
    }
}
