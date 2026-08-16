const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { maxPoolSize: 10 });
mongoose.connection.on("connected", () => console.log("Connected"));
