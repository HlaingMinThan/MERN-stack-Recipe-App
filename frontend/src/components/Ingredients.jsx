export default function Ingredients({ ingredients }) {
    return (
        <div className="space-x-2">
            <span>Ingredients -</span>
            {!!ingredients.length && ingredients.map((ingredient, i) => (
                <span key={i} className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">{ingredient}</span>
            ))}
        </div>
    )
}
