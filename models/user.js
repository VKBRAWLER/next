import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
    email: { 
        type: String,
        unique: [true, 'email already in exists!'],
        required: [true, 'email is required'],
    },
    userSchema: {
        type: String,
        required: [true, 'password is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'username invalid must contain 8-20 characters and be unique']
    },
    image: { 
        type: String,
    }
});

const User = models.User || model("User", userSchema);
export default User;