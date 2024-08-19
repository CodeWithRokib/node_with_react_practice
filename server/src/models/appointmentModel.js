import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    doctor_name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    patient_name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
    },
});

const Appointment = mongoose.model('Appointment',appointmentSchema);

export default Appointment;