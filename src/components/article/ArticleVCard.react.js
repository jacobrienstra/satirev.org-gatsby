// @flow
import * as React from "react";
import { css } from "@emotion/core";

import { type ArticleCard } from "#queries/Article";
import Link from "#common/Link";
import ImageFluid from "#common/ImageFluid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "#common/Card";

const cardRoot = css`
  display: flex;
  flex-direction: column;
  min-width: 160px;
  & .header {
    padding: calc(1 * var(--spacing)) calc(2 * var(--spacing));
    color: var(--crimson);
  }
  & .action-area {
    flex: 1;

    & .link {
      word-wrap: break-word;
    }
  }
`;

type Props = {|
  article: ArticleCard,
  isFeatured: boolean,
|};

function ArticleVCard(props: Props): React.Node {
  let hasExcerpt = false;
  let hasHeader = true;
  let titleTag = "h4";

  if (props.isFeatured) {
    hasExcerpt = true;
    hasHeader = false;
    titleTag = "h3";
  }

  return (
    <Card css={cardRoot} component="article">
      {hasHeader ? (
        <CardHeader className="header" title={props.article.category} />
      ) : null}
      <CardActionArea className="action-area">
        <Link to={props.article.slug} className="link">
          <CardMedia title={props.article.title}>
            <ImageFluid fluid={props.article.imgFluid} />
          </CardMedia>
          <CardContent>
            <titleTag>{props.article.title}</titleTag>
            {hasExcerpt ? (
              <p className="body2">{props.article.shortExcerpt}</p>
            ) : null}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

ArticleVCard.defaultProps = {
  isFeatured: false,
};

export default ArticleVCard;