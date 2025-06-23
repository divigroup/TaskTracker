// server.js
const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // ✅ import MongoDB connection

dotenv.config();

// ✅ connect to MongoDB before starting server
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
