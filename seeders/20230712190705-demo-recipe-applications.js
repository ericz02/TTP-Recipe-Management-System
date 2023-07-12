'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("RecipeApplications", [
      {
        title: "Spaghetti Carbonara",
        description:
          "A classic Italian pasta dish made with eggs, pancetta, Parmesan cheese, and black pepper.",
        ingredients:
          "8 ounces spaghetti, 4 ounces pancetta or bacon, diced, 2 cloves garlic, minced, 2 large eggs, 1 cup grated Parmesan cheese, Freshly ground black pepper, Salt to taste",
        instructions:
          "Cook spaghetti according to package instructions. In a separate pan, cook pancetta or bacon until crispy. In a mixing bowl, whisk together eggs, Parmesan cheese, salt, and black pepper. Drain cooked spaghetti and immediately add to the pancetta or bacon pan, tossing to coat the pasta. Remove from heat and quickly add the egg mixture, stirring constantly to prevent the eggs from scrambling. The heat from the pasta will cook the eggs. Serve immediately with extra Parmesan cheese and black pepper.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Chicken Stir-Fry",
        description:
          "A quick and easy stir-fry recipe with tender chicken, colorful vegetables, and a flavorful sauce.",
        ingredients:
          "2 boneless, skinless chicken breasts, sliced, 1 bell pepper, sliced, 1 cup broccoli florets, 1 carrot, sliced, 1/2 cup snap peas, 2 cloves garlic, minced, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon cornstarch, 1/2 cup chicken broth, 1 tablespoon vegetable oil, Salt and pepper to taste",
        instructions:
          "In a small bowl, whisk together soy sauce, oyster sauce, cornstarch, and chicken broth. Set aside. Heat vegetable oil in a wok or large skillet over high heat. Add chicken slices and cook until browned and cooked through. Remove chicken from the pan and set aside. In the same pan, add garlic, bell pepper, broccoli, carrot, and snap peas. Stir-fry for a few minutes until the vegetables are crisp-tender. Return the cooked chicken to the pan and pour in the sauce mixture. Stir well to coat everything evenly. Cook for an additional 2-3 minutes until the sauce thickens. Season with salt and pepper to taste. Serve hot over steamed rice or noodles.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Banana Bread",
        description:
          "A moist and delicious banana bread recipe that's perfect for breakfast or as a snack.",
        ingredients:
          "2 cups all-purpose flour, 1 teaspoon baking soda, 1/4 teaspoon salt, 1/2 cup unsalted butter, softened, 1 cup granulated sugar, 2 large eggs, 4 ripe bananas, mashed, 1/4 cup milk, 1 teaspoon vanilla extract",
        instructions:
          "Preheat the oven to 350°F (175°C). Grease a 9x5-inch loaf pan. In a medium bowl, whisk together flour, baking soda, and salt. In a separate large bowl, cream together butter and sugar until light and fluffy. Beat in the eggs one at a time, then stir in mashed bananas, milk, and vanilla extract. Gradually add the dry ingredients to the banana mixture, mixing just until combined. Pour the batter into the prepared loaf pan. Bake for 60-70 minutes or until a toothpick inserted into the center comes out clean. Allow the banana bread to cool in the pan for 10 minutes, then transfer it to a wire rack to cool completely. Slice and serve.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("RecipeApplications", null, {});
    
  }
};