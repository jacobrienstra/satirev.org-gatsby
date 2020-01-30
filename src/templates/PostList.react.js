// @flow

import * as React from "react";
import { type ArticleCardFragment } from "@queryTypes/ArticleCardFragment";
import { graphql } from "gatsby";
import { processArticleCardQuery } from "@queries/Article";
import ArticleListBox from "@components/ArticleListBox";
import ArticleListFull from "@components/ArticleListFull";
import Columns from "@layouts/Columns";
import Pagination from "@components/Pagination";
import latestArticlesLinks from "@queries/LatestArticlesLinks";
// TODO: make a generic column number layout

type Props = {
  data: { allDataArticle: { nodes: Array<ArticleCardFragment> } },
  pageContext: any,
  path: string,
};

const PageTemplate = (props: Props): React.Node => (
  <Columns>
    <>
      <ArticleListFull
        articles={props.data.allDataArticle.nodes.map(n =>
          processArticleCardQuery(n)
        )}
        title={props.pageContext.category}
      />
      <Pagination pageContext={props.pageContext} path={props.path} />
    </>
    <>
      <ArticleListBox title="Latest" articles={latestArticlesLinks()} />
      <a
        className="twitter-timeline"
        data-height="600"
        href="https://twitter.com/therealsatirev?ref_src=twsrc%5Etfw"
      >
        Tweets by Satire V
      </a>
    </>
  </Columns>
);

export const query = graphql`
  query ArticleList($limit: Int!, $skip: Int!, $category: String!) {
    allDataArticle(
      limit: $limit
      skip: $skip
      filter: { category: { name: { eq: $category } } }
    ) {
      nodes {
        ...ArticleCardFragment
      }
    }
  }
`;

export default PageTemplate;
