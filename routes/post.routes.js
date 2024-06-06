const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller");
const postController = new PostController();

router.get("/post/:id", postController.findById);
router.post("/post", postController.create);
router.put("/post/:id", postController.update);
router.delete("/post/:id", postController.delete);
router.get("/posts/latest", postController.findLatestPosts);
router.get("/posts/following/:userId", postController.findFollowingPosts);

module.exports = router;
