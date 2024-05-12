import { Document,Schema,model } from "mongoose";
import { Permission } from "../../shared/types";

export interface IRole extends Document{
    name:String;
    permission:Permission[]
}

const roleSchema=new Schema<IRole>({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    permission:{
        type:[String],
        required:true,
    }
},{
    timestamps:true,
    versionKey:false,
}
)
export const Role=model('Role',roleSchema)