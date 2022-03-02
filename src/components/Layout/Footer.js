// import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles } from "@mui/styles";

import { Container, Grid, Typography } from "@mui/material";

// import { routes } from "data/routes";
// import Social from "components/Social";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: `100%`,
        position: "relative",
        overflow: "hidden",
        marginTop: "6em",
        padding: "2em 0 ",
    },
    link: {
        fontSize: "1.25em",
        color: "#fff",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
    copylight: {
        color: "#fff",
        fontSize: "1em",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid
                    item
                    container
                    component={"a"}
                    target="_blank"
                    rel="noreferrer noopener"
                    href="#"
                    justify="center"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <Typography className={classes.copylight}>
                        &copy;Praveen Tiwari
                    </Typography>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;