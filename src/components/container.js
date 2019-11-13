import styled from "styled-components"

const Container = styled.div`
  margin: calc(2rem + 100px) auto 3rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`

export default Container
