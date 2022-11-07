import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    imgMain: {
        type: String,
        required: true
    },
    imgSub: {
        type: String,
        required: true
    }
})

const productWomen = mongoose.model('women', schema)
export default productWomen
