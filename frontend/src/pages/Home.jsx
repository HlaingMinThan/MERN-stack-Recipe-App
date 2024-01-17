import { useEffect, useState } from "react"
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';

export default function Home() {

    let [recipes, setRecipes] = useState([]);

    let location = useLocation();
    let searchQuery = new URLSearchParams(location.search);
    let page = searchQuery.get('page');


    useEffect(() => {
        let fetchRecipes = async () => {
            let response = await fetch('http://localhost:8000/api/recipes?page=' + page);
            if (response.ok) {
                let data = await response.json();
                setRecipes(data);

                //scroll to top
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
        }

        fetchRecipes();
    }, [page])

    //backend info (hardcode)
    let links = {
        nextPage: true,
        previousPage: false,
        currentPage: 1,//hardcode
        loopableLinks: [
            { number: 1 },
            { number: 2 },
            { number: 3 },
        ]
    };

    return (
        <div className="space-y-3">
            {recipes.length && (recipes.map(recipe => (
                <RecipeCard recipe={recipe} key={recipe._id} />
            ))
            )}
            <Pagination links={links} page={page} />
        </div>
    )
}
