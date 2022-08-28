import Product from '../models/product.js';

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.json(products); 
   } catch (error) {
      res.status(500).json({ message: error.message });
   }

}

export const getProductsByID = async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      res.json(product); 
   } catch (error) {
      res.status(404).json({ message: error.message });
   }

}

export const saveProduct = async (req, res) => {
   const product = new Product(req.body);
   try {
      const savedProduct = await product.save();
      res.status(201).json(savedProduct); 
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
}

export const updateProduct = async (req, res) => {
   const cekId = await Product.findById(req.params.id);
   if (!cekId) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
   }
   try {
      const updateProduct = await Product.updateOne({ id: req.params.id }, { $set: req.body });
      res.status(200).json(updateProduct); 
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
}

export const deleteProduct = async (req, res) => {
   const cekId = await Product.findById(req.params.id);
   if (!cekId) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
   }
   try {
      const deletedProduct = await Product.deleteOne({ id: req.params.id }, { $set: req.body });
      res.status(200).json(deletedProduct); 
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
   
}