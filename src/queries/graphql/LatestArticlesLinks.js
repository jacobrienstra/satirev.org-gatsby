/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestArticlesLinks
// ====================================================

export type LatestArticlesLinks_allDataArticle_nodes_category = {
  __typename: "DataCategory",
  name: string,
  slug: string,
};

export type LatestArticlesLinks_allDataArticle_nodes = {
  __typename: "DataArticle",
  id: string,
  slug: string,
  title: string,
  category: LatestArticlesLinks_allDataArticle_nodes_category,
};

export type LatestArticlesLinks_allDataArticle = {
  __typename: "DataArticleConnection",
  nodes: Array<LatestArticlesLinks_allDataArticle_nodes>,
};

export type LatestArticlesLinks = {
  allDataArticle: LatestArticlesLinks_allDataArticle
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================