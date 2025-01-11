// /controllers/productController.js
const { Product } = require("../models/Product");

const productController = {
  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findByPk(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  },

  async create(req, res) {
    const productData = req.body;
    console.log(productData);
    try {
      const newProduct = await Product.create(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Failed to create product" });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const productData = req.body;
    try {
      const product = await Product.findByPk(id);
      if (product) {
        const updatedProduct = await product.update(productData);
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update product" });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findByPk(id);
      if (product) {
        await product.destroy();
        res.status(200).json({ message: "Product delete successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  },
};

module.exports = productController;
