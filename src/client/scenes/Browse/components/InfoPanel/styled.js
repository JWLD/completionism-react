import styled from 'styled-components'

export const ItemImage = styled.div.attrs({
  style: ({ imageUrl }) => ({
    backgroundImage: `url(${imageUrl})`
  })
})`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 0.4rem;
  background-color: #444;
  background-size: cover;
  background-position: center;
`
