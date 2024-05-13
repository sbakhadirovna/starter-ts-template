import { Document, Schema, model } from "mongoose";


export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password:string;
    roleId: string; 
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roleId: [{
        type: String, 
        ref: 'Permission',
        required:true
    }]
}, {
    timestamps: true,
    versionKey: false
});

export const User = model<IUser>('User', userSchema);
