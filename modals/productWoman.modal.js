import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    imgMain: {
        type: String,
        require: true
    },
    imgSub: {
        type: String,
        require: true
    }
})

const productWomen = mongoose.model('women', schema)
export default productWomen
