import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FaUser from 'react-icons/lib/fa/user'

import { mixins } from 'style'

const panelHeight = 7
const panelPadding = 1

export const CategoryPanel = styled.div`
  ${mixins.flex};

  flex-grow: 1;
`

export const ExpandButton = styled.button`
  ${mixins.flex};

  height: ${panelHeight}rem;
  width: ${panelHeight}rem;
  padding-bottom: 0.5rem;
  border-radius: 0.4rem;
  background-color: #333;
  color: gray;
  font-size: 4rem;

  :hover {
    filter: brightness(115%);
    color: gray;
  }
`

export const BrowseLink = styled(Link)`
  ${mixins.flex};

  flex-grow: 1;
  position: relative;
  height: ${panelHeight}rem;
  margin-right: ${panelPadding}rem;
  padding: ${panelPadding}rem;
  border-radius: 0.4rem;
  background-color: #333;
  color: white;
  font: 2.5rem DinRC;

  :hover {
    filter: brightness(115%);
    color: white;
  }
`

export const CategoryImg = styled.img`
  height: ${panelHeight - panelPadding * 2}rem;
  min-width: ${panelHeight - panelPadding * 2}rem;
  margin-right: ${panelPadding}rem;
  border: none;
  border-radius: 0.4rem;

  ${BrowseLink}:hover & {
    filter: brightness(115%);
  }
`

export const CategoryDetails = styled.div`
  ${mixins.flexVerticalLeft};

  width: 100%;
  height: 100%;
`

export const TextWrap = styled.div`
  ${mixins.flexTop};

  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const CategoryName = styled.span``

export const CategoryProgress = styled.span``

export const ImportPageLink = ExpandButton.withComponent(Link).extend`
	position: relative;
	padding: 1.75rem;
	font-size: 3rem;
`

export const UserIcon = styled(FaUser)`
  height: 100%;
  width: 100%;
`

export const Portrait = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: ${panelHeight}rem;
  width: ${panelHeight}rem;
  border-radius: 0.4rem;
  transform: rotateY(180deg);

  &:hover {
    filter: brightness(115%);
  }
`
