const apiRouter = require("express").Router();
const db = require("../models");

apiRouter.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkouts => {
      // call custom method
      dbWorkouts.forEach(dbWorkout => {
        dbWorkout.setTotalDuration();
      });
      
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err)
    });
});

// Push body (excerise data) to exercise array of a specific workout
apiRouter.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: req.params.id
    },{ 
      $push: {exercises: req.body}
    })
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => {
      res.json(err);
    })
});

// Create a new workout
apiRouter.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

apiRouter.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    // returning in json for charts to use
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = apiRouter;
