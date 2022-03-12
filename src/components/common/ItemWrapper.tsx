/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

interface Props {
  category: string;
  value: string | undefined;
}

function ItemWrapper({ category, value }: Props) {
  return (
    <div css={informWrapper}>
      <h2 css={informTitle}>{category}</h2>
      <span>{value}</span>
    </div>
  );
}

export default ItemWrapper;

const informWrapper = css`
  padding-top: 25px;
`;

const informTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.875rem;
`;