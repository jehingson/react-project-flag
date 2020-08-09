import React from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'
import {Link} from 'react-router-dom'

const HeaderStyled = styled.div`
background: var(--white);
margin-bottom: 1em;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12);
.content{
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1{
  font-size: 14px;
}
.dark-mode{
  .moon{
    transform: rotate(-25deg);
    display: inline-flex;
    margin-right: 10px;
    //border: 1px solid red;
  }
  p{
    font-size: 12px;
    font-weight: 600;
  }
}
  
`

function Header() {
  function handleClick() {
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
          <h1>Donde estas Países</h1>
          </Link>
          <div className="dark-mode">
          <p onClick={handleClick}>
            <span className="moon">
            <i className="far fa-moon"></i>
            { /* <i className="fas fa-moon"></i> */}
            </span>    
            Modo Nocturno
         </p>
        </div>
      </div>
      </Wrapper>

    </HeaderStyled>
  )
}

export default Header