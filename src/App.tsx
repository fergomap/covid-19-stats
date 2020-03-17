import React, {FunctionComponent, ReactElement} from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {mainReducer} from 'store/main.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import MainComponent from 'components/main/main.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App: FunctionComponent = (): ReactElement => {
  return <div className="app">
    <Provider store={createStore(mainReducer, composeWithDevTools())}>
      <MainComponent/>
    </Provider>
  </div>;
};

export default App;
