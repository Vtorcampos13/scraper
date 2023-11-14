import express from "express";
import productController from "./controllers/productController.js";

const app = express();

app.get("/",async (req,res)=>{
    try{
        const products = await productController.getAllProducts();
        res.json(products);
    }
    catch(e){
        res.status(500)("ha habido un error intentando conseguir los datos")
    }
})

app.get("/scrap",async (req,res)=>{
    try{
        await productController.scrapProducts()
        const products = await productController.getAllProducts();
        res.json(products);
    }
    catch(e){
        res.status(500)("ha habido un error intentando conseguir los datos")
    }
})

app.listen(3000,()=>{
    console.log("app en marcha en el puerto que sea")
})