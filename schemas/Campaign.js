const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Campaign nomi majburiy"],
  },
  description: String,
  status: String,
  design: {
    front: Array,
    back: Array,
  },
  products: [
    {
      name: {
        type: String,
        required: [true, "Produkt nomi majburiy!"],
      },
      printableArea: {
        front: {
          top: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          left: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          width: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          height: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
        },
        back: {
          top: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          left: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          width: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
          height: {
            type: Number,
            required: [true, "PrintableArea qiymati majburiy!"],
          },
        },
      },
      colors: [
        {
          color: {
            name: {
              type: String,
              required: [true, "Rang nomi majburiy!"],
            },
            content: {
              type: String,
              required: [true, "Product rangi majburiy!"],
            },
          },
          image: {
            front: {
              type: String,
              required: [true, "Product rasmi majburiy!"],
            },
            back: {
              type: String,
              required: [true, "Product rasmi majburiy!"],
            },
          },
        },
      ],
    },
  ],
  images: [
    {
      name: {
        type: String,
        required: [true, "Rasm nomi majburiy!"],
      },
      colors: [
        {
          color: {
            name: {
              type: String,
              required: [true, "Rang nomi majburiy!"],
            },
            content: {
              type: String,
              required: [true, "Product rangi majburiy!"],
            },
          },
          image: {
            front: {
              type: String,
              required: [true, "Product rasmi majburiy!"],
            },
            back: {
              type: String,
              required: [true, "Product rasmi majburiy!"],
            },
          },
        },
      ],
    },
  ],
  tags: [
    {
      name: {
        type: String,
        required: [true, "Tag nomi majburiy!"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Campaign", campaignSchema);
