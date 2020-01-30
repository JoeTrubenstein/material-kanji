import React from "react";
import { graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
import ProTip from "../components/ProTip";
// import Link from "../components/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Stepper from "../components/Stepper";
import CardDeck from "../components/CardDeck";

export default function Index({ data, pageContext }) {
  const { currentPage, numPages, mySlug } = pageContext;
  const prevPage = currentPage - 1 === 1 ? `/` : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Now studying {mySlug}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <ProTip />
      </Container>

      <Container maxWidth="lg">
        {data.allMongodbKandidictKanji ? (
          <div>
            <CardDeck passedData={data.allMongodbKandidictKanji.edges} />
          </div>
        ) : (
          <div>
            <div>Loading ...</div>
          </div>
        )}
        <Box
          my={4}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Stepper
            slug={mySlug}
            next={nextPage}
            prev={prevPage}
            numPages={numPages}
            page={currentPage}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
export const query = graphql`
  query kanjiQuery($skip: Int!, $limit: Int!, $level: String!) {
    allMongodbKandidictKanji(
      filter: { jlpt: { eq: $level } }
      sort: { fields: frequency, order: ASC }
      limit: $limit
      skip: $skip
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
