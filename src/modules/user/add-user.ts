import { User,Role } from "../../db/models";
import bcrypt from 'bcryptjs'
import { BadRequestError } from "../../shared/errors";

type AddUserInput = {
    firstName: string;
    lastName: string;
    email: string;
    password:string;
    roleId: string; 
};

export async function addUser(data: AddUserInput) {
  try {
    const role=await Role.findById(data.roleId)
      if(!role){
        throw new BadRequestError("Role is not found")
      }
    const hashedPwd=await bcrypt.hash(data.password,10)
    const result = await User.create({
      firstName:data.firstName,
      lastName:data.lastName,
      email:data.email,
      password:hashedPwd,
      roleId:role.id
    });
    return result;
  } catch (error) {
    console.log("Error creating user", error);
    throw error;
  }
}
