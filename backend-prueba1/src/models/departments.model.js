import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    codeDep: {
        type : Number,
        required : true, 
        unique: true, 
        index: true 
    },
    nameDep: {
        type: String,
        required: true
    }
});

departmentSchema.index({codeDep: 1}, {unique: true });

export const departmentModel = mongoose.model("departments", departmentSchema);