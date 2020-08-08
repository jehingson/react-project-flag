import React from 'react'
import styled from 'styled-components'
import Buscar from './buscar'
import { Region as FilterByRegion } from "./Region"


const ActionListStyled = styled.div`
max-width: 1280px;
margin: auto;
padding: 0 1rem;
  .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
`

function ActionList() {
  return (
    <ActionListStyled>
        <div className="grid">
          <Buscar />
          <FilterByRegion />
        </div>
     
    </ActionListStyled>
  )
}

export default ActionList