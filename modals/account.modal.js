import mongoose from "mongoose";
const schema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    }

})
const account = mongoose.model('account', schema)
export default account