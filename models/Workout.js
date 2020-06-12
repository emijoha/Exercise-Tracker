const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
    }
  ],

  totalDuration: Number
});

WorkoutSchema.method.setTotalDuration = function() {
  let totalDuration = this.exercises[0].duration;
  for (i = 1; i < this.exercises.length; i++) {
    totalDuration += this.exercises[i].duration;
  }
}

const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;