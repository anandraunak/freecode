import mongoose from "mongoose";

const emailSchema = mongoose.Schema((
    {
  from: {type :String,required:true},
  to: {type :String,required:true},
  subject: {type :String,required:true},
  text: {type :String,required:true},
  email_sent:{type:Boolean,default:false,required:true},
  start_time:{ type: Date,required: true,},
  user_id:{ type: mongoose.Types.ObjectId,ref: 'userModel',required: true,}
}
));

export default mongoose.model("Email", emailSchema);