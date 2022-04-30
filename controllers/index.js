const Review = require("../models/review");

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({ review });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find();
    return res.status(200).json({ review });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.status(200).json({ review });
    }
    return res.status(404).send("Review with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = (req, res) => {
  try {
    const { id } = req.params;
    Review.findByIdAndUpdate(id, req.body, { new: true }, (err, review) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!review) {
        res.status(500).send("Review Not Found");
      }
      return res.status(200).json(review);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Item deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
