import mongoose from "mongoose";


//create schema for databse 
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
       required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlenggth:6,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePic:{
        type:String,
        default:""
    }
})

const User = mongoose.model("User",userSchema);

export default User;