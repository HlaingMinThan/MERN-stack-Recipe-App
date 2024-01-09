export default function RecipeCard({ recipe }) {
    return (
        <div className="bg-white p-5 rounded-2xl space-y-3" >
            <h3 className="text-xl font-bold text-orange-400">{recipe.title}</h3>
            <p>Description</p>
            <p>{recipe.description}</p>
            <div className="space-x-2">
                <span>Ingredients -</span>
                {!!recipe.ingredients.length && recipe.ingredients.map((ingredient, i) => (
                    <span key={i} className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">{ingredient}</span>
                ))}
            </div>
            <p className="text-gray-500">Published at - {recipe.createdAt}</p>
        </div>
    )
}
