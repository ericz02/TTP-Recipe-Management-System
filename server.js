const { RecipeApplication } = require("./models");

// create a new recipe
app.post("/recipes", async (req, res) => {
  try {
    const newRecipe = await RecipeApplication.create(req.body);
    res.status(201).json(newRecipe);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
})

// get all recipes
app.get("/recipes", async (req, res) => {
  try {
    const allRecipe = await RecipeApplication.findAll();
    res.status(200).json(allRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
})

// get a specific recipe
app.get("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const recipe = await RecipeApplication.findOne({ where: { id: recipeId } });
    
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).send({ message: "Recipe not found." })
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
})

// update a recipe
app.patch("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const [numberOfAffectedRows, affectedRows] = await RecipeApplication.update(req.body, { where: { id: recipeId }, returning: true });

    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.error(err);
  }
});