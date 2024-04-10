import express from 'express';
import mongoose from 'mongoose'
import ProductRouter from './router/product.js'
const app = express();
app.use(express.json())
app.use('', ProductRouter)
const connectDB = async ()=>{
    try {
        mongoose.connect(`mongodb://localhost:27017/ASM2`)
        console.log('Ket noi thanh cong');
    } catch (error) {
        console.log('Ket noi that bai');
    }
}
app.listen(4000,()=>{
    connectDB()
    console.log("http://localhost:4000");
})