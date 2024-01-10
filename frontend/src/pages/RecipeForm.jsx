import { useState } from 'react';
import plus from '../assets/plus.svg';
import Ingredients from '../components/Ingredients';

export default function RecipeForm() {
    let [ingredients, setIngredients] = useState([]);
    let [newIngredient, setNewIngredient] = useState('');

    let addIngredient = () => {
        setIngredients(prev => [newIngredient, ...prev])
        setNewIngredient('');
    }
    return (
        <div className="mx-auto max-w-md border-2 border-white p-4">
            <h1 className="mb-6 text-2xl font-bold text-orange-400 text-center">Recipe Create Form</h1>
            <form action="" className="space-y-5">
                <input type="text" placeholder="Recipe Title" className="w-full p-1" />
                <textarea placeholder="Recipe Description" rows="5" className="w-full p-1" />
                <div className="flex space-x-2 items-center">
                    <input value={newIngredient} onChange={e => setNewIngredient(e.target.value)} type="text" placeholder="Recipe Ingredient" className="w-full p-1" />
                    <img src={plus} alt="" className='cursor-pointer' onClick={addIngredient} />
                </div>
                <div>
                    <Ingredients ingredients={ingredients} />
                </div>
                <button className='w-full px-3 py-1 rounded-full bg-orange-400 text-white'>Create Recipe</button>
            </form>
        </div>
    )
}
