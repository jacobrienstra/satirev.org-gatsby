// @flow
import * as React from "react";
import { css } from "@emotion/core";

const list = css`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

type Props = {
  children: ?React.Node,
  component: string | React.ComponentType<any>,
};

function List(props: Props): React.Node {
  const { children, component, ...rest } = props;
  const Component = component;
  return (
    <Component {...rest} css={list}>
      {children}
    </Component>
  );
}

List.defaultProps = {
  component: "ul",
};

const listItem = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  text-decoration: none;
`;

function ListItem(props: Props): React.Node {
  const { children, component, ...rest } = props;
  const Component = component;
  return (
    <Component {...rest} css={listItem}>
      {children}
    </Component>
  );
}

ListItem.defaultProps = {
  component: "li",
};

export { List, ListItem };
export default List;
