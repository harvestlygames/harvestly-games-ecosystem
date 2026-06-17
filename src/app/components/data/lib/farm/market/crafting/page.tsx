const recipes = [
  {
    item: "Bread",
    ingredients: [
      "Wheat",
      "Water"
    ]
  },
  {
    item: "Cheese",
    ingredients: [
      "Milk"
    ]
  }
];

export default function CraftingPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">
        Crafting
      </h1>

      {recipes.map((recipe) => (
        <div
          key={recipe.item}
          className="border p-4 rounded-lg mb-4"
        >
          <h2>{recipe.item}</h2>

          <p>
            {recipe.ingredients.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
