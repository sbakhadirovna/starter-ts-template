import { Role } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID } from "../../shared/types";

export async function removeRole(id: ID) {
  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      throw new NotFoundError("Role not found");
    }
    return role;
  } catch (error) {
    console.log("Error remove role", error);
    throw error;
  }
}
