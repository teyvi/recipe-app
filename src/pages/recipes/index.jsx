import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";
import noRecipes from "../../asset/images/no-data.svg";
import pageloading from "../../asset/images/loading.svg";
export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchItem,setSearchItem] =useState("");
    const [loading,setLaoding] = useState(false);

    const searchRecipes = () => {
        setLaoding(true);
        //prepare url
        const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchItem);// Add the query parameter
  
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
            .finally(() => setLaoding(false));

    }
    useEffect(searchRecipes, []);
    
    return (
        <Container sx={{ my: '2rem' }}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined"
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
                onKeyDown={event => event.key == 'Enter' && searchRecipes()}
                />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                { loading ? (
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop:'180px'
                    }}>
                        <img src={pageloading} width='50%'/>
                    </Container>
                ) : recipes.length > 1 ? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/>):(
                    <Container sx={{
                        display: 'flex', 
                        justifyContent:'center', 
                        marginTop:'180px'}}>
                        <img src={noRecipes} width="20%"/>
                    </Container> 
                )}
            </Grid>
        </Container>
    );
}