import styled from 'styled-components'

export const ListWrap = styled.div`
  width: 100%;
`

export const ItemList = styled.div`
  flex-direction: column;
`

export const SourceTitle = styled.span`
  margin-top: -0.5rem;
  font: 3rem DinMC;
  color: white;
  text-transform: uppercase;

  :only-child {
    margin: 0;
  }
`

export const SubTitle = styled.span`
  width: 100%;
  margin: 0.25rem 0 0.5rem 0;
  color: white;
  font: 2.25rem DinMC;
  text-transform: uppercase;
`

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`
