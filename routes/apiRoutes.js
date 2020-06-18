const apiRouter = require("express").Router();
const db = require("../models");

apiRouter.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Push body (excerise data) to exercise array of a specific workout
// apiRouter.put("/api/workouts/:id", ({ body }, res) => {
//   let id = req.params.id;

// });

apiRouter.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(err => {
    console.log(err);
  });
});

// apiRouter.get("/api/workouts/range", (req, res) => {
//   db.Workout.find({})
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// });

module.exports = apiRouter;
