import mongoose from "mongoose";

export const conexionMongo = async ()=>{
    try {
        await mongoose.connect(process.env.BD_URL,{dbName:"GestionEmpleados"});
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.error("Error de conexión: ", error);
    }
}