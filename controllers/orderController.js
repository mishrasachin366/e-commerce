const { Order } = require("../models/order");

const orderController = {
  async create(req, res) {
    const orderData = req.body;
    try {
      const newOrder = await Order.create(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  },

  async getAll(req, res) {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.findByPk(id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const orderData = req.body;
    try {
      const order = await Order.findByPk(id);
      if (order) {
        const updatedOrder = await order.update(orderData);
        res.json(updatedOrder);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update order" });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.findByPk(id);
      if (order) {
        await order.destroy();
        res.status(200).json({ message: "Order delete successfully" });
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete order" });
    }
  },
};

module.exports = orderController;
