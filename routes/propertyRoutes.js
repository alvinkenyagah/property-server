const express = require("express");
const multer = require("multer");
const Property = require("../models/Property");
const protect = require("../middleware/authMiddleware");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Add Property
router.post("/add", protect, upload.array("images", 5), async (req, res) => {
  if (!req.user.isLandlord) return res.status(403).json({ message: "Access denied" });

  const { title, description, price, location } = req.body;
  const images = req.files.map(file => file.path);

  const property = new Property({ landlord: req.user.id, title, description, price, location, images });
  await property.save();

  res.status(201).json({ message: "Property added successfully" });
});

// Get All Properties
router.get("/", async (req, res) => {
  const properties = await Property.find().populate("landlord", "name email");
  res.json(properties);
});

module.exports = router;
