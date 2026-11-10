const axios = require("axios");
const express = require("express");
// const posts = require("./data.js");

const app = express();

// parsing data from boy
app.use(express.json());

// listen
app.listen(5000, () => {
  console.log("Server is listening on the port 5000");
});

// GET all
app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return res.json(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }

    // 3. Check if the request was made but no response was received (Network / Timeout error)
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }

    // 4. Catch-all for any other unexpected setup/code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// GET one post
app.get("/api/posts/:postID", async (req, res) => {
  const postID = Number(req.params.postID);
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}`,
    );
    const post = await response.data;
    return res.status(response.status).json(post);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }

    // 3. Check if the request was made but no response was received (Network / Timeout error)
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }

    // 4. Catch-all for any other unexpected setup/code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// POST create post
app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const post = await response.data;
    return res.status(response.status).json(`post created: ${post.id}`);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }

    // 3. Check if the request was made but no response was received (Network / Timeout error)
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }

    // 4. Catch-all for any other unexpected setup/code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// PUT update post
app.put("/api/posts/:postID", async (req, res) => {
  const postID = Number(req.params.postID);
  const userId = req.body.userId;
  const title = req.body.title;
  const body = req.body.body;
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postID}`,
      {
        userId,
        title,
        body,
      },
    );
    const post = await response.data;
    return res.status(response.status).json(post);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }

    // 3. Check if the request was made but no response was received (Network / Timeout error)
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }

    // 4. Catch-all for any other unexpected setup/code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// DELETE post
app.delete("/api/posts/:postID", async (req, res) => {
  const postID = Number(req.params.postID);
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postID}`,
    );
    return res.status(response.status).json("post deleted");
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        error: `External API Error: ${error.response.statusText}`,
        details: error.message,
      });
    }

    // 3. Check if the request was made but no response was received (Network / Timeout error)
    if (error.request) {
      return res.status(503).json({
        error:
          "Service Unavailable: No response received from the external server.",
        details: error.message,
      });
    }

    // 4. Catch-all for any other unexpected setup/code errors
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});
