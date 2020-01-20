import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Joe Trubenstein
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [
  { char: "荷", meaning: "baggage" },
  { char: "歯", meaning: "tooth" },
  { char: "変", meaning: "unusual" }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Study Kanji
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Kanji Cards
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              A simple way to review Kanji characters by JLPT level.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={6} justify="center">
                <Grid item>
                  <Button href="/n5" variant="contained" color="primary">
                    N5
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/n4" variant="contained" color="primary">
                    N4
                  </Button>
                </Grid>{" "}
                <Grid item>
                  <Button href="/n3" variant="contained" color="primary">
                    N3
                  </Button>
                </Grid>{" "}
                <Grid item>
                  <Button href="/n2" variant="contained" color="primary">
                    N2
                  </Button>
                </Grid>{" "}
                <Grid item>
                  <Button href="/n1" variant="contained" color="primary">
                    N1
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography
              variant="h6"
              align="center"
              color="textPrimary"
              paragraph
            >
              Featured Kanji
            </Typography>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.char} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h3" component="h2">
                      {card.char}
                    </Typography>
                    <Typography>{card.meaning}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/n3" size="small" color="primary">
                      learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Developed using <a href="https://gatsbyjs.org">GatsbyJS</a> and{" "}
          <a href="https://material-ui.com/">Material UI</a>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          More on my <a href="https://github.com/joeTrubenstein">GitHub</a>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
