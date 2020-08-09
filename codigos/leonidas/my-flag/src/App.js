import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import CountryList from './componentes/Country-list';
import Header from "./componentes/header";
import './App.css';
import reducer from "./reduce";
import ActionList from "./componentes/Action-list.js";
import Countrypage from './componentes/contry-page';
import { 
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"  

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
      
      <Router>
        <Header />
        <Switch>
        <Route path="/country/:id" component={Countrypage} />
        <Route path="/">
          <ActionList />
          <CountryList />
        </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
