"use strict";

const { hashPassword } = require("../helpers/bcrypt");
const { formatSlug } = require("../helpers/formatSlug");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@mail.com",
          password: hashPassword("admin"),
          role: "admin",
          phoneNumber: "08123456789",
          address: "Denpasar",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Cushion",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          name: "Refill",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Cushion Breathable Cover",
          slug: formatSlug("Cushion Breathable Cover"),
          description:
            "Equipped with anti-bacterial Breathable Technology & formulated to be non-oxidized even after all-day wear.",
          price: 185900,
          mainImg:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/22092022_FEED-1_FC.jpg",
          categoryId: 1,
          authorId: 1,
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          name: "Copy Cushion",
          slug: formatSlug("Copy Cushion"),
          description:
            "Specially Created for Indonesian Skin Tone & Humidity of Tropical Weather.",
          price: 189900,
          mainImg:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Somethinc-Copy_Paste_Breathable_Cushion-Cover.jpg",
          categoryId: 2,
          authorId: 1,
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          productId: 1,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Hooman_00_Cover.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 1,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/CoverBadass-NOFRAME.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 1,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Under_Control_HD_Blur_Loose_Setting_Powder.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 1,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Somethinc_DNA_Square_Cover_%281%29.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 2,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Somethinc_Eggo_No_Frame-All-04.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 2,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Hangover_Voluminous_Fiber_Lash_Smudgeproof_Mascara_2.png",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 2,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Somethinc_19102022_Swatch_on_Hand_Tamago_EB.jpg",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
        {
          productId: 2,
          imgUrl:
            "https://images.somethinc.com/uploads/products/thumbs/800x800/Wake_Me_Up_Concealer.png",
          createdAt: "3/15/2023",
          updatedAt: "3/15/2023",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Images", null, {});
  },
};
