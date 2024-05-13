import { Role } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID, Permission } from "../../shared/types";

type EditRoleInput = {
  name?: string;
  permission?: Permission[];
};
export async function editRole(id: ID, data: EditRoleInput) {
  try {
    const role = await Role.findById(id);
    if (!role) {
      throw new NotFoundError("Role not found");
    }
    const updated = await Role.findByIdAndUpdate(id, data,{new:true});
    return updated;
  } catch (error) {
    console.log("Error editing role", error);
    throw error;
  }
}
