import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    doctor_name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    description:{
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