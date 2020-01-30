const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
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
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // ...

  const kanji = result.data.allMongodbKandidictKanji.edges;
  //
  const kanjiPerPage = 33;
  const numPages = Math.ceil(kanji.length / kanjiPerPage);

  // Create n5 kanji pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `n5` : `/n5/${i + 1}`,
      component: path.resolve("./src/templates/kanji-template.js"),
      context: {
        limit: kanjiPerPage,
        skip: i * kanjiPerPage,
        level: "N5 (beginner)",
        mySlug: "n5",
        numPages: numPages,
        currentPage: i + 1
      }
    });
  });

  const result2 = await graphql(
    `
      {
        allMongodbKandidictKanji(
          filter: { jlpt: { eq: "N4 (basic)" } }
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
    `
  );
  if (result2.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const kanji2 = result2.data.allMongodbKandidictKanji.edges;
  const numPages2 = Math.ceil(kanji2.length / kanjiPerPage);

  // Create n4 kanji pages
  Array.from({ length: numPages2 }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/n4` : `/n4/${i + 1}`,
      component: path.resolve("./src/templates/kanji-template.js"),
      context: {
        limit: kanjiPerPage,
        skip: i * kanjiPerPage,
        level: "N4 (basic)",
        mySlug: "n4",
        numPages: numPages2,
        currentPage: i + 1
      }
    });
  });

  const result3 = await graphql(
    `
      {
        allMongodbKandidictKanji(
          filter: { jlpt: { eq: "N3 (lower intermediate)" } }
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
    `
  );
  if (result3.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const kanji3 = result3.data.allMongodbKandidictKanji.edges;
  const numPages3 = Math.ceil(kanji3.length / kanjiPerPage);

  // Create n3 kanji pages
  Array.from({ length: numPages3 }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/n3` : `/n3/${i + 1}`,
      component: path.resolve("./src/templates/kanji-template.js"),
      context: {
        limit: kanjiPerPage,
        skip: i * kanjiPerPage,
        level: "N3 (lower intermediate)",
        mySlug: "n3",
        numPages: numPages3,
        currentPage: i + 1
      }
    });
  });

  const result4 = await graphql(
    `
      {
        allMongodbKandidictKanji(
          filter: { jlpt: { eq: "N2 (intermediate)" } }
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
    `
  );
  if (result4.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const kanji4 = result4.data.allMongodbKandidictKanji.edges;
  const numPages4 = Math.ceil(kanji4.length / kanjiPerPage);

  // Create n2 kanji pages
  Array.from({ length: numPages4 }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/n2` : `/n2/${i + 1}`,
      component: path.resolve("./src/templates/kanji-template.js"),
      context: {
        limit: kanjiPerPage,
        skip: i * kanjiPerPage,
        level: "N2 (intermediate)",
        mySlug: "n2",
        numPages: numPages4,
        currentPage: i + 1
      }
    });
  });

  const result5 = await graphql(
    `
      {
        allMongodbKandidictKanji(
          filter: { jlpt: { eq: "N1 (advanced)" } }
          sort: { fields: frequency, order: ASC }
          limit: 333
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
    `
  );
  if (result5.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const kanji5 = result5.data.allMongodbKandidictKanji.edges;
  const numPages5 = Math.ceil(kanji5.length / kanjiPerPage);

  // Create n1 kanji pages
  Array.from({ length: numPages5 }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/n1` : `/n1/${i + 1}`,
      component: path.resolve("./src/templates/kanji-template.js"),
      context: {
        limit: kanjiPerPage,
        skip: i * kanjiPerPage,
        level: "N1 (advanced)",
        mySlug: "n1",
        numPages: numPages5,
        currentPage: i + 1
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
