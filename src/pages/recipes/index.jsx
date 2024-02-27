import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchIterm,setSearchIterm] =useState([]);

    const searchRecipes = () => {
        //prepare url
        const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
        url.searchParams.append('apiKey', process.env.SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchIterm); // Add the query parameter
        //fetch recipes
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //update the recipes state
                setRecipes(data.results);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    useEffect(searchRecipes, []);
    // const handleRecipeClick = (recipeId) => {
    //     const clickedRecipe = recipes.find(recipe => recipe.id === recipeId);
    //     console.log(`Clicked on recipe: ${clickedRecipe.title}`);
    //     // Implement your logic to navigate to the detailed view of the recipe
    // };
    return (
        <Container sx={{ my: '2rem' }}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined"
                value={searchIterm}
                onChange={(event) => setSearchIterm(event.target.value)}
                onKeyDown={event => event.key == 'Enter' && searchRecipes()}
                />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                { recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/>)}
            </Grid>
        </Container>
    );
}