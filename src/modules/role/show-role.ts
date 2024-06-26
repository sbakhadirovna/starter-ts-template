import { Role } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID } from "../../shared/types";

export async function showRole(id: ID) {
  try {
    const role = await Role.findById(id);
    if (!role) {
      throw new NotFoundError("Role not found");
    }
    return role;
  } catch (error) {
    console.log("Error showing role", error);
    throw error;
  }
}
