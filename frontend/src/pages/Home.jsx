import { useEffect, useState } from "react"
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';

export default function Home() {

    let [recipes, setRecipes] = useState([]);
    let [links, setLinks] = useState(null);

    let location = useLocation();
    let searchQuery = new URLSearchParams(location.search);
    let page = searchQuery.get('page'); // string
    page = parseInt(page); //int


    useEffect(() => {
        let fetchRecipes = async () => {
            let response = await fetch('http://localhost:8000/api/recipes?page=' + page);
            if (response.ok) {
                let data = await response.json();

                setLinks(data.links)
                setRecipes(data.data);

                //scroll to top
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
        }

        fetchRecipes();
    }, [page])

    return (
        <div className="space-y-3">
            {!!recipes.length && (recipes.map(recipe => (
                <RecipeCard recipe={recipe} key={recipe._id} />
            ))
            )}
            {!!links && <Pagination links={links} page={page || 1} />}
        </div>
    )
}
