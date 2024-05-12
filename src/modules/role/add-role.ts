import { Role } from "../../db/models";
import { Permission } from "../../shared/types";

type AddRoleInput = {
  name: string;
  permission: Permission;
};

export async function addRole(data: AddRoleInput) {
  try {
    const result = await Role.create(data);
    return result;
  } catch (error) {
    console.log("Error creating role", error);
    throw error;
  }
}
