const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


const usersRoute = require("./routers/users.js");
app.use("/users", usersRoute);


app.get("/", (req, res) => {
    res.send("🚀 Сервер працює! CRUD доступний на /users");
});


app.listen(PORT, () => {
    console.log(`✅ Сервер запущено: http://localhost:${PORT}`);
});
