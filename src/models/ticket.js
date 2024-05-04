const mongoose = require('mongoose')
require('./user')

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required: true,
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref:'Department',
        required: true,
    },
    subDepartment:{
        type:mongoose.Types.ObjectId,
        ref:'SubDepartment',
        required: true,
    },
    hasAnswer:{
        type:Boolean,
        default:false
    },
    priority:{
        type:Number,
        required:true
    },

},{timestamps:true})



const model = mongoose.models.Ticket || mongoose.model('Ticket',schema)

export default model