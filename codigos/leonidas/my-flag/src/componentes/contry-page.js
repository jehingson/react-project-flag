import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'
import { useSelector } from 'react-redux'
import CountrySelected from "./country-selected"

const CountryPageStyled = styled.div`
  .Back{
    background: var(--white);
    color: var(--black);
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    i{
      margin-right: 5px;
    }
  }
`

function CountryPage({ match, history }) {
  console.log(history)
  let DBcountry = useSelector(state => state.countryList.find(item => item.alpha2Code === match.params.id))
  const [country, setCountry] = useState(DBcountry)
  
  useEffect(() => {

    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data)
      })
    }
  }, [country, match.params.id])

  function handleClick() {
    history.goBack()
  }

  console.log('VPS', country);

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="Back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  )
}

export default CountryPage