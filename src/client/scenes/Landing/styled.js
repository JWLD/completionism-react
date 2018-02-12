import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mixins } from 'style'

const panelHeight = 7
const panelPadding = 1

export const LandingPage = styled.div`
  ${mixins.page};
`

export const CategoryBlock = styled.ul`
  :not(:last-child) {
    margin-bottom: ${panelPadding * 3}rem;
  }
`

export const CategoryPanel = styled.li`
  ${mixins.flex};

  :not(:last-child) {
    margin-bottom: ${panelPadding}rem;
  }
`

export const ExpandButton = styled.button`
  height: ${panelHeight}rem;
  width: ${panelHeight}rem;
  padding-bottom: 0.5rem;
  border-radius: 0.4rem;
  background-color: #333;
  color: gray;
  font-size: 4rem;

  :hover {
    background-color: #444;
    color: gray;
  }
`

export const BrowseLink = styled(Link)`
  position: relative;
  width: 50rem;
  height: ${panelHeight}rem;
  margin: 0 ${panelPadding}rem;
  border-radius: 0.4rem;
  background-color: #333;
  color: white;
  font: 2.5rem DinMC;

  :hover {
    background-color: #444;
    color: white;
  }
`

export const CategoryImg = styled.img`
  position: absolute;
  left: ${panelPadding}rem;
  top: ${panelPadding}rem;
  height: ${panelHeight - panelPadding * 2}rem;
  width: ${panelHeight - panelPadding * 2}rem;
  border: none;
  border-radius: 0.4rem;

  ${BrowseLink}:hover & {
    filter: brightness(115%);
  }
`

export const CharacterLink = ExpandButton.withComponent(Link).extend`
	position: relative;
	padding: 0;
	font-size: 3rem;
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
