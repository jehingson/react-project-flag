import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import Input from "./Input"

const BuscarStyled = styled.div`
  display: flex;
  position: relative;
  .close{
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 25%;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .1);
    cursor: pointer;
  }
`


function Buscar() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()



  const filterByName = (e) => {
    setInputValue(e.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value
    })
  }
  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: ' '
    })
    setInputValue('')
  }


  return (
    <BuscarStyled>

      {
        inputValue &&
        <i className="fas fa-times close" onClick={clearInput} />
      }

      <Input placeholder="Buscar país" valur={inputValue} onChange={filterByName} />

    </BuscarStyled>
  )
}

export default Buscar