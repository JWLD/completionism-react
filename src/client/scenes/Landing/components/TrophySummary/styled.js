import FaTrophy from 'react-icons/lib/fa/trophy'
import styled from 'styled-components'

import { mixins } from 'style'

const trophySize = '15rem'
const trophySpacing = '3rem'

export const TrophySummaryWrap = styled.div`
  ${mixins.flex};

  padding: 2rem;
  margin-bottom: 3rem;
  border-radius: 0.6rem;
`

export const TrophyWrap = styled.div`
  height: ${trophySize};
  width: ${trophySize};
  padding: 2rem;
  border-radius: 100%;
  background: #444;
  color: white;
  box-shadow: 0 0 2rem 0.1rem #222;

  :not(:last-child) {
    margin-right: ${trophySpacing};
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 2rem 0.1rem black;
  }
`

export const TrophyIcon = styled(FaTrophy)`
  width: 100%;
  height: 100%;
  color: ${props => (props.active ? '#a8882d' : '#333')};
`
