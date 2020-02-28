import * as React from "react";
import { css } from "@emotion/core";

import Chip from "#common/Chip";
import SvgIcon from "#assets/SvgIcon";

const root = css`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: calc(0.5 * var(--spacing));
  }
`;

type Props = {
  tags: Array<string>;
};

function TagSection(props: Props): JSX.Element {
  return (
    <div css={root}>
      <SvgIcon size="large" icon="tag" />
      {props.tags.map((tag, i) => (
        <Chip key={i.toString()} label={tag} />
      ))}
    </div>
  );
}

export default TagSection;
