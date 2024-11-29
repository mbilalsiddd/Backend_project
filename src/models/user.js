import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.schema({
    fullname: { type: string, required: true },
    designation: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, require: true },
});


    userSchema.pre("save", async function (next) {
        try {
            if (!this.isModified("password")) return next();
            this.password = await bcrypt.hash(this.password, 10)
            next()
    
            } catch (error) {
              next(error)
        }
    });

    
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     this.password = bcrypt.hash(this.password, 10)
//     next()
// });



const user = mongoose.model("User", userSchema);


export default user;