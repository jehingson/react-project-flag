import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
//import Input  from './Input'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-columns-gap: 80px;
  grid-template-columns: repeat(auto-fill, minmax(0, 264px));
  background: var(--background);
  justify-content: center;
  padding: 3em 2em;
  box-sizing: border-box;
  max-width: 1280px;
  margin: auto;
`
function CountryList() {

  const dispatch = useDispatch()
  const countryListByName = useSelector((state) => state.countryListByName)

  const countryList = useSelector((state) => {
    if ( state.filterByRegion  !== '' && countryListByName.length === 0 ) {
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
 
  return (
    <CountryListStyled>
      {
          countryList.map(({ name, flag, population, region, capital, alpha2Code }) => {
          return (
            <Country
              flag={flag}
              name={name}
              key={name}
              population={population}
              region={region}
              capital={capital}
              alpha2Code={alpha2Code}
            />
          )
        })
      }
    </CountryListStyled>
  )
}

export default CountryList
