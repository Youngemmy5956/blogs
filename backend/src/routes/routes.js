import express from "express";
import Comment_model from "../model/comments.js";

// import auth from "../middleware/auth.js";

const router = express.Router();



// auth create comment post

router.post("/blogs/createComment", async (req, res) => {
  const { name, upvotes, comments } = req.body;
    try {
      const comment = await Comment_model.create({ name, upvotes, comments });
      res.status(201).json({ comment });
    }
    catch (err) {
      res.status(400).json({ message: err.message });
    }
});


// get all comments post

router.get("/blogs/getAllComment", async (req, res) => {
  try {
    const comments = await Comment_model.find();
    res.status(200).json({comments });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
});


// get single comment post

router.get("/blogs/getSingleComment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Comment_model.findById(id).then((comments) => {
      res.status(201).json({ message: "comment successfully listed", comments });
    });
  } catch (err) {
    res.status(400).json({
      message: "comment not successfully listed",
      error: err.message,
    });
  }
});

// update comment post

router.put("/blogs/updateComment/:id", async (req, res) => {
  const { id } = req.params;
  const { name, upvotes, comments } = req.body;
  try {
    await Comment_model.findByIdAndUpdate(id, { name, upvotes, comments }).then(
      (comments) => {
        res.status(201).json({ message: "comment successfully updated", comments });
      }
    );
  } catch (err) {
    res.status(400).json({
      message: "comment not successfully updated",
      error: err.message,
    });
  }
});


// delete comment post

router.delete("/blogs/deleteComment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Comment_model.findByIdAndDelete(id).then((comments) => {
      res.status(201).json({ message: "comment successfully deleted", comments });
    });
  } catch (err) {
    res.status(400).json({
      message: "comment not successfully deleted",
      error: err.message,
    });
  }
});



export default router;
