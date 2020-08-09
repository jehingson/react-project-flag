import React from 'react'
import styled from 'styled-components'


const CountryPageStyled = styled.div`
  margin-top: 2em;
`

function CountryPage({ match }) {
  
  return (
    <CountryPageStyled>
      {match.params.id}
    </CountryPageStyled>
  )
}

export default CountryPage