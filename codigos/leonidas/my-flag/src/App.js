import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import CountryList from './componentes/Country-list';
import Header from "./componentes/header";

import './App.css';
import reducer from "./reduce";
import ActionList from "./componentes/Action-list.js";

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}




const store = createStore(reducer, initialState)


function App() {
  return (
    <Provider store={store}>
        <Header />
        <ActionList />
        <CountryList />
    </Provider>
  );
}

export default App;
