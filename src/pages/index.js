
import {Container, Grid, Typography} from "@mui/material";

//components
import Form from '@/components/modules/Form'


const Homepage = () => {
    return (

        <Container maxWidth="md">
            <Typography
                variant="h2"
                align="center"
                gutterBottom
                style={{ marginBottom: "1em", marginTop: "1em" }}
            >
                This is an example app of form saving
            </Typography>
            <Grid container direction="column" alignItems="center" spacing={4}>
                <Form/>
            </Grid>
        </Container>
    );
};

export default Homepage;
