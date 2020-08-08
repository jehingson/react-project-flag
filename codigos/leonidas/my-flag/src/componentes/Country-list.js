import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  //grid-template-columns: 1fr 1fr 1fr;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
`
function CountryList() {

  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const countryListByName = useSelector((state) => state.countryListByName)

  const countryList = useSelector((state) => {
    if ('' !== state.filterByRegion) {
      return state.coutryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName
    }

    return state.countryList;
  })


  console.log('el estado de mi app es,', countryList)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://restcountries.eu/rest/v2/all')
      const data = await res.json();
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: data
      })
      console.log(data.length)
    }
    fetchData();
  }, [dispatch])

  const filterByName = (e) =>{
    setInputValue(e.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value
    })
  }
  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: ''
    })
    setInputValue('')
  }

  
  return (
    <CountryListStyled>

      <input type="text" valur={inputValue} onChange={filterByName} />
      {
        inputValue && 
        <button onClick={clearInput} > x </button>
      }
      {
        countryListByName.length === 0 && inputValue && 
        <p>
          <strong>{inputValue}</strong> No se encuentra el país
        </p>
      }
      {
          countryList.map(({ name, flag, population, region, capital }) => {
          return (
            <Country
              flag={flag}
              name={name}
              key={name}
              population={population}
              region={region}
              capital={capital} />
          )
        })
      }
    </CountryListStyled>
  )
}

export default CountryList
