import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
import App from './App';
import { reducer, StateProvider } from "./state";
import ThemeSelector from './components/theme/ThemeSelector';
import { SearchContextManager } from '@giphy/react-components';

ReactDOM.render(
    <StateProvider reducer={reducer}>
      <SearchContextManager apiKey={'7OxAYxG8tHX3A1KuOX73LzFhWyUxQJro'}>
      <ThemeSelector>
        <App />
      </ThemeSelector>
      </SearchContextManager>
    </StateProvider>
  ,
  document.getElementById('root')
);
