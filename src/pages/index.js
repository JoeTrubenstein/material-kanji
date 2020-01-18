import React from "react";
import { graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import ProTip from "../components/ProTip";
// import Link from "../components/Link";
import CardDeck from "../components/CardDeck";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Index({ data }) {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Kanji N5
        </Typography>
        {/* <Link to="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
        {/* <Copyright /> */}
      </Box>
      {data.allMongodbKandidictKanji ? (
        <div>
          <CardDeck passedData={data.allMongodbKandidictKanji.edges} />
        </div>
      ) : (
        <div>
          <div>Loading ...</div>
        </div>
      )}
    </Container>
  );
}
export const query = graphql`
  query {
    allMongodbKandidictKanji(
      filter: { jlpt: { eq: "N5 (beginner)" } }
      sort: { fields: frequency, order: ASC }
    ) {
      edges {
        node {
          jlpt
          kanji
          id
          kunyomi
          meaning
          onyomi
          frequency
          strokes
          radical
          compact_meaning
          type
        }
      }
    }
  }
`;
