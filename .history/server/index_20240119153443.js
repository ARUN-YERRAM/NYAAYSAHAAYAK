const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Login')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})

const UserModel = mongoose.model("users", UserSchema) 

// app.post("/Login", (req,res) =>  {
//     const {email, password} = req.body
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             if(user.password === password) {
//                 res.json("Login Successfully")
//             } else {
//                 res.json("The password is incorrect")
//             }
//         } else {
//             res.json("No record existed")
//         }
//     })
// })





app.listen(3000,() => {
    console.log("Server is Running");
})












// const express = require("express");
//   const mongoose = require("mongoose");
//   const app = express();
//   const port = process.env.PORT || 4000;
  
//   mongoose.connect("mongodb://localhost:27017/NYAAYSAHAAYAK", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   const db = mongoose.connection;
  
//   db.on("error", console.error.bind(console, "MongoDB connection error:"));
//   db.once("open", () => {
//     console.log("Connected to MongoDB");
//   });
  
//   const userSchema = new mongoose.Schema({
    
//     name: String,
//     DATA: String,
    
//   });
  
//   const User = mongoose.model("User", userSchema);

//   const legalSchema = new mongoose.Schema({
    
//     name: String,
//     DATA: String,
    
//   });
  
//   const Legalinfo = mongoose.model("Legalinfo", legalSchema);
  
//   app.get("/Legalinfo", async (req, res) => {
//     try {
//       const legals = await Legalinfo.find();
//       res.json(legals);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "An error occurred while fetching users." });
//     }
//   });
//   app.get("/api/data", async (req, res) => {
//     try {
//       // const users = await User.find();
//       res.json(" hello Welcome to Backend Server");
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "An error occurred while fetching users." });
//     }
//   });
  
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });