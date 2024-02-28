
import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography} from "@mui/material";
import noRecipes from "../../asset/images/no-data.svg";
export default function RecipeItem({title,image}){
    return(
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 ,height:"100%"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}