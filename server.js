// server.js
const express = require("express");
const bodyParser = require("body-parser");
const { connectDatabase } = require("./database");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to the database
connectDatabase().then(() => {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/wishlist", wishlistRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
