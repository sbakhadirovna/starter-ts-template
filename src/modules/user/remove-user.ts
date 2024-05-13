import { User } from "../../db/models";
import { NotFoundError } from "../../shared/errors";
import { ID } from "../../shared/types";

export async function removeUser(id: ID) {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  } catch (error) {
    console.log("Error remove user", error);
    throw error;
  }
}
