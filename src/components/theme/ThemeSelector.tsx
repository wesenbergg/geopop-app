import React from 'react';
import Helmet from "react-helmet";
import { useStateValue } from '../../state';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeSelector: React.FC<any> = ({ children }) => {  
  const [ { theme },  ] = useStateValue();
  
  return (
    <>
      <Helmet>
          <link rel="stylesheet" type="text/css" href={`${theme}.css`} />

          { window && !window.require &&
          <style type="text/css">
            {` body {
              margin-left: 15px;
              } `}
          </style>
          }
      </Helmet>
      {children}
    </>
  );
};

export default ThemeSelector;