import express from "express";
import Blog_model from "../model/blogs.js";

// import auth from "../middleware/auth.js";

const router = express.Router();



// auth create blog post

router.post("/blogs/createPost", async (req, res) => {
  const { name, upvotes, comments } = req.body;
    try {
      const blog = await Blog_model.create({ name, upvotes, comments });
      res.status(201).json({ blog });
    }
    catch (err) {
      res.status(400).json({ message: err.message });
    }
});


// get all blogs post

router.get("/blogs/getAllPost", async (req, res) => {
  try {
    const blogs = await Blog_model.find();
    res.status(200).json({ blogs });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
});


// get single blog post

router.get("/blogs/getSinglePost/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Blog_model.findById(id).then((blogs) => {
      res.status(201).json({ message: "blog successfully listed", blogs });
    });
  } catch (err) {
    res.status(400).json({
      message: "blog not successfully listed",
      error: err.message,
    });
  }
});

// update blog post

router.put("/blogs/updatePost/:id", async (req, res) => {
  const { id } = req.params;
  const { name, upvotes, comments } = req.body;
  try {
    await Blog_model.findByIdAndUpdate(id, { name, upvotes, comments }).then(
      (blogs) => {
        res.status(201).json({ message: "blog successfully updated", blogs });
      }
    );
  } catch (err) {
    res.status(400).json({
      message: "blog not successfully updated",
      error: err.message,
    });
  }
});


// delete blog post

router.delete("/blogs/deletePost/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Blog_model.findByIdAndDelete(id).then((blogs) => {
      res.status(201).json({ message: "blog successfully deleted", blogs });
    });
  } catch (err) {
    res.status(400).json({
      message: "blog not successfully deleted",
      error: err.message,
    });
  }
});



export default router;
