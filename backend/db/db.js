import mongoose from "mongoose";
const connect_TO_mdb = async()=>{
    try{
        await mongoose.connect(process.env.mdb_url)
        console.log("connected to mdb");
    }
    catch(error){
console.log("error during db connections",error.message);
    }
}

export default connect_TO_mdb;

