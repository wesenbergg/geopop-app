import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import { reducer, StateProvider } from "./state";
import ThemeSelector from './components/ThemeSelector';

ReactDOM.render(
  
    <StateProvider reducer={reducer}>
      <ThemeSelector>
        <App />
      </ThemeSelector>
    </StateProvider>
  ,
  document.getElementById('root')
);
