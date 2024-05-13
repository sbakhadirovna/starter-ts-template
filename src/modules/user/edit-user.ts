import {  User } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID, Permission } from "../../shared/types";

type EditUserInput = {
  firstName: string;
    lastName: string;
    email: string;
    password:string;
    roleId: string; 
};
export async function editUser(id: ID, data: EditUserInput) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    const updated = await User.findByIdAndUpdate(id, data,{new:true});
    return updated;
  } catch (error) {
    console.log("Error editing User", error);
    throw error;
  }
}
