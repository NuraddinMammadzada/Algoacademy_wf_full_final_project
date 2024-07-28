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

// Define Video schema and model
const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: [String],
    default: []
  }
});
const Video = mongoose.model('Video', videoSchema);

// Product Routes
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
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    console.error('Error fetching videos:', err);
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User Routes
app.post("/api/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

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

app.get('/api/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ name: user.username, email: user.email });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Video Routes
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/videos/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/videos', async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/api/videos/:id/like', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });

    video.likes += 1;
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/api/videos/:id/comment', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });

    video.comments.push(req.body.comment);
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
