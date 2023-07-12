const { RecipeApplication } = require("./models");

// create a new recipe
app.post("/recipes", async (req, res) => {
  try {
    const newRecipe = await RecipeApplication.create(req.body);
    res.status(201).json(newRecipe);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
})