const { Post } = require("../models");
const { UniqueConstraintError } = require("sequelize");
const { User, Like, Comment, sequelize } = require("../models");

class PostRepository {
  async findById(id) {
    const data = await Post.findByPk(id);

    if (!data) {
      throw new Error("Post not found");
    } else {
      return data;
    }
  }

  async create(post) {
    try {
      return await Post.create(post);
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new Error("Post already exists");
      } else {
        throw new Error("Error creating post");
      }
    }
  }

  async update(id, postUpdates) {
    return await Post.update(postUpdates, { where: { id } });
  }

  async delete(id) {
    return await Post.destroy({ where: { id } });
  }

  async findLatestPosts() {
    return await Post.findAll({
      attributes: [
        "id",
        "photo_url",
        "description",
        "createdAt",
        [sequelize.col("User.username"), "username"],
        [sequelize.fn("COUNT", sequelize.col("Likes.id")), "like_count"],
        [sequelize.fn("COUNT", sequelize.col("Comments.id")), "comment_count"],
      ],
      include: [
        {
          model: User,
          attributes: [],
        },
        {
          model: Like,
          attributes: [],
        },
        {
          model: Comment,
          attributes: [],
        },
      ],
      group: ["Post.id", "User.username"],
      order: [["createdAt", "DESC"]],
    });
  }

  async findFollowingPosts(userId) {
    return await Post.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
    });
  }
}

module.exports = PostRepository;
