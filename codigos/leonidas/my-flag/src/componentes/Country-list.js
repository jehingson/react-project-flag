import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
//import Input  from './Input'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  //grid-template-columns: 1fr 1fr 1fr;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
  box-sizing: border-box;
  
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
