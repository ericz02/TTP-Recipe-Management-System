const express = require("express");
const app = express();
const port = 4000;
const { RecipeApplication } = require("./models");
require("dotenv").config();


app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    console.log(`Response Status: ${res.statusCode}`);
  });
  next();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Recipe Management System");
});

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

// create a new recipe
app.post("/recipes", async (req, res) => {
  const recipeData = req.body;
  try {
    const newRecipe = await JobApplication.create(recipeData);
    res.status(201).json(newRecipe);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(422).json({ errors: err.errors.map(e => e.message) });
    }
    console.error(err);
    res.status(500).json({ message: 'An unexpected error occurred.' });
  }
});

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

//  delete a recipe
app.delete("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const deleteOp = await RecipeApplication.destroy({ where: { id: recipeId } });

    if (deleteOp > 0) {
      res.status(200).send({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});