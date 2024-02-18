import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

let courseSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

export let userModal = mongoose.model("Users", userSchema);
export let courseModal = mongoose.model("Course", courseSchema);
