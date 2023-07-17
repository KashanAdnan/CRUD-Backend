import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model("Class Work", userSchema);

export { Product }