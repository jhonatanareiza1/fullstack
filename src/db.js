import mongoose from "mongoose";
export const connectDB = async ()=>{
   try {
    await mongoose.connect('mongodb://localhost:27017/senados');
    console.log('>>>> estamos conectados a mongodb al la base de datos senados');
   } catch (error) {
        console.log("que mkada con estas conexion ", error);
   }
}