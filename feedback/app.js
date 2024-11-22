const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Feedback = require("./model/feedback.js");
const app = express();

main().catch((err) => {
  console.log("Oh no ERROR!!!");
  console.error(err);
});

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/feedback");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.get('/view', async (req, res) => {
    const feedbacks = await Feedback.find({});
    res.render("view-feedback", {feedbacks})
})

app.get("/", (req, res) => {
  res.render("page1")
})
app.get("/registration",(req,res)=>{
  res.render("registration");
})

app.post("/submit", async (req, res) => {
  const { name, email, advice, challenges, recommendations, agree } = req.body;

  const newFeedback = new Feedback({
    name,
    email,
    advice,
    challenges,
    recommendations,
  });

  await newFeedback.save();
  res.redirect("/view");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
