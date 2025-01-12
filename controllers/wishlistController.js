const { Wishlist } = require("../models/wishlist");

const wishlistController = {
  async create(req, res) {
    const { userId, productId } = req.body; // Assume proper validation/sanitization here
    try {
      const newWishlistItem = await Wishlist.create({ userId, productId });
      res.status(201).json(newWishlistItem);
    } catch (error) {
      console.error("Error creating wishlist item:", error);
      res.status(500).json({ error: "Failed to add to wishlist" });
    }
  },

  async getAll(req, res) {
    try {
      const wishlists = await Wishlist.findAll();
      res.json(wishlists);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wishlist items" });
    }
  },

  async getByUserId(req, res) {
    const userId = req.params.userId;
    try {
      const wishlist = await Wishlist.findAll({ where: { userId } });
      res.json(wishlist);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wishlist for the user" });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      const wishlistItem = await Wishlist.findByPk(id);
      if (wishlistItem) {
        await wishlistItem.destroy();
        res.status(200).json({ message: "Wishlist delete successfully" });
      } else {
        res.status(404).json({ message: "Wishlist item not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete wishlist item" });
    }
  },
};

module.exports = wishlistController;
