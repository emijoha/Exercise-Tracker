const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: "Select the type of exercise for this workout"
  },
  name: {
    type: String,
    trim: true,
    required: "The name of the exercise is required"
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  reps: {
    type: Number,
    required: false
  },
  sets: {
    type: Number,
    required: false
  }
});

const Exercise = mongoose.model("Book", ExerciseSchema);

module.exports = Exercise;