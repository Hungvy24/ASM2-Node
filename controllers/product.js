import ProductModel from "../models/product.js";

export const getAllProduct = async (req, res)=>{
    try {
        const products = await ProductModel.find();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(503).json({status: false, message: "Loi request"})
    }
}
export const getProductById = async (req, res)=>{
    try {
        const id = req.params.id;
        const products = await ProductModel.find({_id:id});
        return res.status(200).json({status:true, data:products})
    } catch (error) {
        return res.status(503).json({status:false, message:"Loi request"})
    }
}
export const addProduct = async (req, res)=>{
    try {
        const body = req.body;
        const productModel = await ProductModel.create(body);
        const product = await productModel.save();
        return res.status(200).json({status:true, data:product})
    } catch (error) {
        return res.status(503).json({status:false, message:"Loi request"})
    }
}
export const UpdateProduct = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await ProductModel.findOneAndUpdate({_id:id}, body,{new:true})
        return res.status(200).json({status:true, data:product , message:"Update thanh cong"})
    } catch (error) {
        return res.status(503).json({status:false, message:"Loi request"})
    }
}
export const DeleteProduct = async (req, res)=>{
    try {
        const id = req.params.id;
        const product = await ProductModel.findOneAndDelete({_id:id});
        return res.status(200).json({status:true, data:product , message:"Delete thanh cong"})
    } catch (error) {
        return res.status(503).json({status:false, message:"Loi request"})
    }
}
