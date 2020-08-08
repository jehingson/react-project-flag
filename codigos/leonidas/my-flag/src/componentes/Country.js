import React from 'react'
import styled from 'styled-components'


const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .09);
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .datails{
    padding: 1.5em;
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weigth: 700;
  }
  p{
    font-size: .9em;
    margin-bottom: .5rem;
  }

`

function Country({
  flag,
  name,
  population,
  region,
  capital
}) {

  return (
    <CountryStyled>
      <img loading="lazy" src={flag} />
      <div className="datails">
        <h2>{name}</h2>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>

    </CountryStyled>
  )
}

export default Country