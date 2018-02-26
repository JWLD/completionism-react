import styled from 'styled-components'

import { mixins, vars } from 'style'

export const DetailPanel = styled.div`
  ${mixins.flex};

  position: fixed;
  top: ${vars.sizing.navBarHeight + vars.sizing.browsePadding}rem;
  right: ${vars.sizing.browsePadding}rem;

  width: calc(50vw - ${vars.sizing.browsePadding * 1.5}rem);
  height: calc(
    100vh - ${vars.sizing.navBarHeight + vars.sizing.browsePadding * 2}rem
  );
  border-radius: 0.4rem;
  background-color: ${vars.colours.mainGrey};
`
