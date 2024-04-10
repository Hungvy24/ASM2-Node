import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String
},
{
    timeStamp: true
}
)

const ProductModel = mongoose.model('Products', ProductSchema)
export default ProductModel