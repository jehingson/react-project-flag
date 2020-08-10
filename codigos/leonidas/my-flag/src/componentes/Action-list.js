import React from 'react'
import styled from 'styled-components'
import Buscar from './buscar'
import { Region as FilterByRegion } from "./Region"


const ActionListStyled = styled.div`
max-width: 1282px;
margin: auto;
padding: 0 1rem;
  .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    max-width: 1037px;
    margin: auto;
  }
  @media screen and (min-width: 768px){
    .grid{
      grid-template-columns: 480px 1fr 200px;

    }
  }
`

function ActionList() {
  return (
    <ActionListStyled>
        <div className="grid">
        <Buscar />
        <span></span>
          <FilterByRegion />
        </div>
     
    </ActionListStyled>
  )
}

export default ActionList