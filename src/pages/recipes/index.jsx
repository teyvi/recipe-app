import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{ my: '2rem' }} maxWidth="sm">
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Card>
                    <CardContent>
                        <Typography variant="h5">Recipe Name</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    );
}