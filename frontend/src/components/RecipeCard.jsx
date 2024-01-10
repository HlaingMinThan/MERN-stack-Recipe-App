import Ingredients from '../components/Ingredients';

export default function RecipeCard({ recipe }) {
    return (
        <div className="bg-white p-5 rounded-2xl space-y-3" >
            <h3 className="text-xl font-bold text-orange-400">{recipe.title}</h3>
            <p>Description</p>
            <p>{recipe.description}</p>
            <Ingredients ingredients={recipe.ingredients} />
            <p className="text-gray-500">Published at - {recipe.createdAt}</p>
        </div>
    )
}
