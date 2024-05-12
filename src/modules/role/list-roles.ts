import { Role } from "../../db/models";
import { IListInput } from "../../shared/types";
type SortBy="name"|"createdAt"|"updatedAt"
interface IListRolesInput extends IListInput<SortBy>{}


export async function listRoles({
    q= "",
    sortBy=  "createdAt",
    order=  "desc",
    offset= 0,
    limit= 5,
}: IListRolesInput) {
  try {
    const roles = await Role.find({
        name:{
            $regex:q,
            $options:'i'
        }
    })
    .sort({[sortBy]:order})
    .skip(offset)
    .limit(limit)
    const total=await Role.countDocuments();
    return {roles,
        meta:{
            total,
            offset,
            limit
        },
    };
  } catch (error) {
    console.log("error listing roles", error);
    throw error;
  }
}
