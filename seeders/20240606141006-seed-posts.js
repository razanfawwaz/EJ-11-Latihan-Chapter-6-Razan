"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = [
      {
        user_id: 39,
        photo_url: "https://example.com/photo1.jpg",
        description: "This is the first post",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 40,
        photo_url: "https://example.com/photo2.jpg",
        description: "Enjoying the sunny day",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 41,
        photo_url: "https://example.com/photo3.jpg",
        description: "My latest artwork",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 42,
        photo_url: "https://example.com/photo4.jpg",
        description: "Delicious homemade food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 43,
        photo_url: "https://example.com/photo5.jpg",
        description: "Amazing sunset at the beach",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 44,
        photo_url: "https://example.com/photo6.jpg",
        description: "Mountain hiking adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 45,
        photo_url: "https://example.com/photo7.jpg",
        description: "New tech gadget review",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Posts", posts, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
