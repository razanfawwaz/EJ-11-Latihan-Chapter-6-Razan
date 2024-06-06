const PostService = require("../usecase/post.service");
const BaseResponse = require("../util/base.response");

class PostController {
  constructor() {
    this.postService = new PostService();
  }

  findById = async (req, res) => {
    try {
      const post = await this.postService.findById(req.params.id);
      res.json(new BaseResponse(true, "Post found", post));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };

  create = async (req, res) => {
    try {
      if (!req.body) {
        throw new Error("Body is empty");
      } else if (!req.body.image) {
        throw new Error("image are required");
      }
      const post = await this.postService.create(req.body);
      res.json(new BaseResponse(true, "Post created", post));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };

  update = async (req, res) => {
    try {
      const post = await this.postService.update(req.params.id, req.body);
      res.json(new BaseResponse(true, "Post updated", post));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };

  delete = async (req, res) => {
    try {
      await this.postService.delete(req.params.id);
      res.json(new BaseResponse(true, "Post deleted", null));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };

  findLatestPosts = async (req, res) => {
    try {
      const posts = await this.postService.findLatestPosts();
      res.json(new BaseResponse(true, "Posts found", posts));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };

  findFollowingPosts = async (req, res) => {
    try {
      const posts = await this.postService.findFollowingPosts(
        req.params.userId
      );
      res.json(new BaseResponse(true, "Posts found", posts));
    } catch (error) {
      res.status(404).json(new BaseResponse(false, error.message, null));
    }
  };
}

module.exports = PostController;
