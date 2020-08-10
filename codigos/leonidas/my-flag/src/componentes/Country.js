import React from 'react'
import styled from 'styled-components'
import {
  useHistory
} from "react-router-dom";
import slugify from 'slugify';


const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  cursor: pointer;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .09);
  &:hover .datails{
    border: 1px solid var(--black);
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .datails{
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
    background: var(--white);
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
  capital,
  alpha2Code,
}) {

  const history = useHistory()

  function handleClick() {

    console.log( 'que' , alpha2Code, name)
    history.push(`/country/${alpha2Code}`)
    
  }

  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt="" />
      <div className="datails">
        <h2>{name}</h2>
        <p><strong>Población:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>

    </CountryStyled>
  )
}

export default Country