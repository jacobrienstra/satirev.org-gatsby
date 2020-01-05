// @flow

import * as React from "react";
import { Container, Skeleton } from "@material-ui/core";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import ArticleList from "@components/ArticleList";
import ArticleVCardGrid from "@components/ArticleVCardGrid.react";
import BreakingNewsBar from "@components/BreakingNewsBar";
import MainRecent from "@components/MainRecent";
import latestArticlesByCategoryCards from "@queries/LatestArticlesByCategoryCards";
import latestArticlesLinks from "@queries/latestArticlesLinks";
import theme from "@styles/theme";

// TODO: make a generic column number layout

const gridRoot = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${theme.spacing(3)}px;
  .column {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacing(2)}px;
    grid-template-rows: min-content;
  }
  .column-1 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 6;
    }
    ${theme.breakpoints.up("lg")} {
      grid-column: 1 / span 6;
    }
  }
  .column-2 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
      grid-row: span 1;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 7 / span 6;
      grid-row: 1 / span 2;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 7 / span 3;
      grid-row: span 1;
    }
  }
  .column-3 {
    ${theme.breakpoints.up("xs")} {
      grid-column: span 12;
    }
    ${theme.breakpoints.up("md")} {
      grid-column: 1 / span 6;
    }
    ${theme.breakpoints.up("lg")} {
      grid-column: 10 / span 3;
    }
  }
`;

export default (): React.Node => (
  <>
    <BreakingNewsBar />
    <Container maxWidth="xl">
      <div css={gridRoot}>
        <div className="column column-1">
          <MainRecent />
          <ArticleVCardGrid articles={latestArticlesByCategoryCards()} />
        </div>
        <div className="column column-2">
          <ArticleList title="Latest" articles={latestArticlesLinks()} />
        </div>
        <div className="column column-3">
          {/* TODO: make skeleton/placeholder actually do that, not makeshift */}
          <div style={{ height: 600, background: theme.palette.grey["300"] }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="therealsatirev"
              options={{ height: 600 }}
            />
          </div>
        </div>
      </div>
    </Container>
  </>
);
