import React from "react";
// import { graphql } from "gatsby";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import ProTip from "../components/ProTip";
// import Link from "../components/Link";
// import CardDeck from "../components/CardDeck";
import Paper from "../components/Paper";

export default function Index({ data }) {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Paper />
      </Box>
    </Container>
  );
}
