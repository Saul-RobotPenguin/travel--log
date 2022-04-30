const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    location: { type: String, required: true },
    costOfTravel: { type: String, required: true },
    image: { type: String, required: false },
    typesOfTransportation: { type: String, required: true },
    wouldRecommend: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("review", Review);
