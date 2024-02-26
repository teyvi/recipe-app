import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="static" color="success">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}