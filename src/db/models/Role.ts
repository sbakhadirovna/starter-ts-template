import { Document, Schema, model } from "mongoose";
import { Permission } from "../../shared/types";

export interface IRole extends Document {
    name: string;
    permission: Permission[]; 
}

const roleSchema = new Schema<IRole>({
    name: {
        type: String,
        unique: true,
        required: true
    },
    permission: [{
        type: Schema.Types.ObjectId, 
        ref: 'Permission' 
    }]
}, {
    timestamps: true,
    versionKey: false
});

export const Role = model<IRole>('Role', roleSchema);
