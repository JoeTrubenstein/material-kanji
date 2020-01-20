import React from "react";
import { graphql, Link } from "gatsby";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
// import ProTip from "../components/ProTip";
// import Link from "../components/Link";
import CardDeck from "../components/CardDeck";

export default function Index({ data, pageContext }) {
  const { currentPage, numPages, mySlug } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/` : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  console.log("current " + currentPage);
  console.log("num " + numPages);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Kanji N5
        </Typography> */}
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

      {!isFirst && (
        <Link to={`${mySlug}/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`${mySlug}/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </Container>
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
