import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import Button from "#common/Button";

const PADDING_HORIZONTAL = 16;
const MARGIN_HORIZONTAL = 4;
const FONT_SIZE = "16px";
const MARGIN_OF_ERROR = "40px";

function reducer(total, node) {
  let counter = 0;
  node.name.split("").forEach(el => {
    if (el.match(/(?![i])[a-z0-9]/gi)) {
      counter += 1;
    } else {
      counter += 0.4;
    }
  });
  return total + counter;
}

function Navbar(): JSX.Element {
  const { allDataCategory } = useStaticQuery(graphql`
    query NavQuery {
      allDataCategory {
        nodes {
          name
          slug
          id
        }
      }
    }
  `);

  // TODO: this is dumb. we should be responsive without calcing the size
  const letterCount = allDataCategory.nodes.reduce(reducer, 0);
  const marginLength =
    +allDataCategory.nodes.length *
    ((MARGIN_HORIZONTAL + PADDING_HORIZONTAL) * 2);

  const navRootStyle = css`
    background: white;
    text-align: center;
    white-space: nowrap;
    @media (max-width: calc(
      ${marginLength}px + (205px * 2) + (${letterCount} * ${FONT_SIZE} * 2 / 3)
    + ${MARGIN_OF_ERROR})) {
      grid-column: span 3; /* see header */
    }

    & .nav-button {
      margin: 0 ${MARGIN_HORIZONTAL}px;
    }
  `;

  return (
    <nav css={navRootStyle}>
      {allDataCategory.nodes.map(node => (
        <Button
          to={`/${node.slug}`}
          key={node.id}
          className="nav-button"
          partiallyActive
        >
          {node.name}
        </Button>
      ))}
    </nav>
  );
}

export default Navbar;
