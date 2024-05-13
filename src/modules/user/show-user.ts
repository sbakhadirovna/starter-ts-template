import { User } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID } from "../../shared/types";

export async function showUser(id: ID) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  } catch (error) {
    console.log("Error showing User", error);
    throw error;
  }
}
