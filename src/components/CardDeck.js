import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CollapseCard from "./CollapseCard";

const useStyles = makeStyles(theme => ({
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
    margin: "auto"
  },
  cardContent: {
    flexGrow: 1
  },
}));

export default function CardDeck(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.passedData.map(card => (
              <Grid item key={card.node.id} xs={12} sm={6} md={4}>
                <CollapseCard
                  kanji={card.node.kanji}
                  on={card.node.onyomi}
                  kun={card.node.kunyomi}
                  meaning={card.node.meaning}
                  jlpt={card.node.jlpt}
                  freq={card.node.frequency}
                  strokes={card.node.strokes}
                  radical={card.node.radical}
                  compact={card.node.compact_meaning}
                  type={card.node.type}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
