import mongoose from "mongoose";
import bcrypt from "bcrypt"

/*
  TODO 1:
  Create a new mongoose.Schema for User
  It should have:
  - name: String, required
  - email: String, required, unique
*/

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false //to exclude password field by default and include it only when needed(for comparison)
  },
  role: {
    type: String,
    enum: ["user", "admin","manager"],
    default: "user"
  }
}, { timestamps: true })

/*
  TODO 2:
  Add a pre-save hook that:
  - hashes password before saving
  - only hashes if password is modified
*/
const saltRounds = 10;
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return; //avoids double hashing

  this.password = await bcrypt.hash(this.password, saltRounds)

});

/*
  TODO 2:
  Create a User model using mongoose.model
  Model name should be "User"
*/

const User = mongoose.model("User", userSchema)

export default User;
