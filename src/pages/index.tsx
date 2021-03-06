import * as React from "react";

import topArticlesLinks from "#queries/TopArticlesLinks";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";
import Columns from "#layouts/Columns.react";
import MainRecent from "#components/MainRecent.react";
import BreakingNewsBar from "#components/BreakingNewsBar.react";
import ArticleVCardGrid from "#components/article/ArticleVCardGrid.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

export default (): JSX.Element => (
  <>
    <BreakingNewsBar />
    <Columns>
      <>
        <MainRecent />
        <ArticleVCardGrid articles={latestArticlesByCategoryCards()} />
      </>
      <>
        <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
      </>
      <TwitterTimeline />
    </Columns>
  </>
);
