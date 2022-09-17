import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String},
  password: { type: String},
  id: { type: String },
  googleId:{type:String}
});

export default mongoose.model("User", userSchema);