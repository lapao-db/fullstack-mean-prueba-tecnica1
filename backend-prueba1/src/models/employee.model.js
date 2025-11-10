import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    codeEmp:{
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    name:{
        type : String,
        required: true
    },
    lastName1: {
        type : String,
        required: true
    },
    lastName2:{
        type : String
    },
    codeDepartment: {
        type : Number,
        required : true,
        index: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId, ref: "departaments"
    }
});

employeeSchema.index({codeEmp: 1}, {unique: true});

export const employeeModel = mongoose.model("employee", employeeSchema)