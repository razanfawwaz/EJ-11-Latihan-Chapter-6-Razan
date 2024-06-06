"use strict";

const bcrypt = require("bcrypt"); // Menggunakan bcrypt untuk meng-hash password

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        username: "ariq",
        email: "ariq@example.com",
        password: await bcrypt.hash("password1", 10), // Meng-hash password
        is_verified: false,
        priority_level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "arnof",
        email: "arnof@example.com",
        password: await bcrypt.hash("password2", 10),
        is_verified: true,
        priority_level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "brantas",
        email: "brantas@example.com",
        password: await bcrypt.hash("password3", 10),
        is_verified: false,
        priority_level: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "haidar",
        email: "haidar@example.com",
        password: await bcrypt.hash("password4", 10),
        is_verified: true,
        priority_level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "rizki",
        email: "rizki@example.com",
        password: await bcrypt.hash("password5", 10),
        is_verified: false,
        priority_level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dije",
        email: "dije@example.com",
        password: await bcrypt.hash("password6", 10),
        is_verified: true,
        priority_level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "fadhil",
        email: "fadhil@example.com",
        password: await bcrypt.hash("password7", 10),
        is_verified: false,
        priority_level: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
