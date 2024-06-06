const PostRepository = require("../repository/post.repository");

class PostService {
  constructor() {
    this.postRepo = new PostRepository();
  }

  async findById(id) {
    return await this.postRepo.findById(id);
  }

  async create(post) {
    const newPost = await this.postRepo.create(post);
    return newPost;
  }

  async update(id, postUpdates) {
    return await this.postRepo.update(id, postUpdates);
  }

  async delete(id) {
    return await this.postRepo.delete(id);
  }

  async findLatestPosts() {
    return await this.postRepo.findLatestPosts();
  }

  async findFollowingPosts(userId) {
    return await this.postRepo.findFollowingPosts(userId);
  }
}

module.exports = PostService;
