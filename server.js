require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const profileRoutes = require("./routes/profileRoutes");

const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/user", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
