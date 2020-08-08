import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import CountryList from './componentes/Country-list';
import { Region } from "./componentes/Region";
import './App.css';

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}


function reducer(state, action) {

  console.log(action);
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      console.log('vamos bien pais')
      return {...state, countryList: action.payload}
    }
    
    case 'SET_COUNTRY_BY_NAME': {
      const countryListByName = (state.countryList || [])
        .filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
        return {...state, countryListByName }
    }

    case 'FILTER_BY_REGION': {
      const {regionSelected} = action.payload;

      if ('' === regionSelected) {
        return {...state, coutryFilteredByRegion: [], filterByRegion: '',};
      }

      const coutryFilteredByRegion = state.countryList.filter((country) => country.region === regionSelected);

      return { ...state, coutryFilteredByRegion, filterByRegion: regionSelected}
    }
      
    default: { return state }
  }
}


const store = createStore(reducer, initialState)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Region />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
