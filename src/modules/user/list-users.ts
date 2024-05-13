import { User } from "../../db/models";
import { IListInput } from "../../shared/types";

type SortBy="name"|"createdAt"|"updatedAt"
interface IListUserInput extends IListInput<SortBy>{}

export async function listUsers({
    q= "",
    sortBy=  "createdAt",
    order=  "desc",
    offset= 0,
    limit= 5,
}: IListUserInput) {
  try {
    const user = await User.find({
        name:{
            $regex:q,
            $options:'i'
        }
    })
    .sort({[sortBy]:order})
    .skip(offset)
    .limit(limit)
    const total=await User.countDocuments();
    return {user,
        meta:{
            total,
            offset,
            limit
        },
    };
  } catch (error) {
    console.log("error listing User", error);
    throw error;
  }
}
