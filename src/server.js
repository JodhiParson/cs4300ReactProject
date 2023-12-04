// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const conn_str =
  "mongodb+srv://jodhiparson:CNfezWoagOUtO1PN@cluster0.blqsh2k.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

mongoose.connect(conn_str, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => {
    console.log("MongoDB Connection Succeeded @ localhost:3000");
  })
  .on("error", (error) => {
    console.log(`Error in DB Connection: ${error}`);
  });

// Define your routes (e.g., items and users)
const items = require('./routes/api/items');
const users = require('./routes/api/users');

//USERS.JS vvv
const express = require("express");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require("../../models/User");

//Signup Route
userRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, confirmPassword, username } = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({msg: "Please enter all of the fields"});
        }
        if (password.length < 6) {
            return res
            .status(400)
            .json({msg: "Password should be at least 6 characters"});
        }
        if (confirmPassword !== password) {
            return res.status(400).json({msg: "Both the passwords do not match"});
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
            .status(400)
            .json({msg: "User with the same email already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword,username });

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

//Login Route
userRouter.post("/login",async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all the fields"});
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({msg: "User with this email does not exist"});
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ msg: "Incorrect password." });
        }

        const token = jwt.sign({ id: user._id }, passwordKey);
        res.json({token,user: {id: user._id, username: user.username} });
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

//to get the users credentials
userRouter.get("/". auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id:user._id,
    });
});

//USERS.JS ^^^

app.use('/api/items', items);
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
