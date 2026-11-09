require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// middleware
app.use(express.json());

// server listen
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// user objects
const users = [
  {
    id: 1,
    username: "anasjm",
    password: "$2b$10$T1VrX6IV662Rf2DfuTe92.inKY33RYitsdOMVLsf3DKZ7FCDXZUy.",
  },
  {
    id: 2,
    username: "chabah",
    password: "$2b$10$E.7MBI3skGw29U7SfcZkMOuB.S7tsozR7uyPivxn1i8kJ/Os13RaS",
  },
];

// hash function
async function hashPassword(normalPassword) {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(normalPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
}

// POST user registeration
app.post("/api/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // hashing password
  try {
    const hashedPassword = await hashPassword(password);
    // new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };
    // storing user in array
    users.push(newUser);
    // response
    res.status(200).json(newUser);
  } catch (error) {
    // check for response error
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }
    // Check if no response was received
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }
    // other unexpected setup or code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// POST user login
app.post("/api/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // check username and password
  try {
    const user = users.find((user) => user.username === username);
    if (user) {
      // checking password
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESS_TOKEN_SECRET,
        );
        res.status(200).json({ accessToken });
      } else {
        res.status(404).json("Password incorrect!");
      }
    } else {
      res.status(404).json("Username is incorrect!");
    }
  } catch (error) {
    // check for response error
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }
    // Check if no response was received
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }
    // other unexpected setup or code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// Middelware autentication token
function autenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "access token missing!" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).json("Not Authorized");
    }
    req.user = user;
    next();
  });
}

// GET user profile
app.get("/api/profile", autenticateToken, (req, res) => {
  if (req.user) {
    const user = req.user;
    res.status(200).json(user);
  } else {
    res.status(403).json("Not Authorized!");
  }
});
