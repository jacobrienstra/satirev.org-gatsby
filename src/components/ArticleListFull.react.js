// @flow
import * as React from "react";
import { type ArticleCard } from "@queries/Article";
import { List, Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import ArticleListItem from "@components/ArticleListItem";
import theme from "@styles/theme";

type Props = {
  articles: Array<ArticleCard>,
  title: string,
};

const titleRoot = css`
  border-bottom: 1px solid ${theme.palette.grey["500"]};
`;

function ArticleListFull(props: Props): React.Node {
  return (
    <div>
      <Typography css={titleRoot} variant="h1">
        {props.title}
      </Typography>
      <List>
        {props.articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </List>
    </div>
  );
}

export default ArticleListFull;