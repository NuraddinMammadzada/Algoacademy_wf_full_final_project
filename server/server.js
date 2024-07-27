const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Product schema and model
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String
});
const Product = mongoose.model('Product', ProductSchema);

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});
const User = mongoose.model("User", userSchema);

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const { search = '', category = 'all' } = req.query;
    const query = {};
    if (category !== 'all') query.category = category;
    if (search) query.name = new RegExp(search, 'i');
    
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User registration
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// User login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid username or password" });
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: "Invalid username or password" });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
