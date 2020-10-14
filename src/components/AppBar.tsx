import React, { useEffect, useState } from "react";
import TitleBar from 'frameless-titlebar';
import icon from '../img/icon.png';
import { ipcMock } from '../utils/ipcRendererMock';
import { titleBarDark, titleBarLight } from '../utils/titleBarStyle';
import { TitleBarTheme } from "frameless-titlebar/dist/title-bar/typings";
// import { Theme } from "../types";
import { useStateValue } from "../state";

const { ipcRenderer } = window.require ? window.require('electron'): ipcMock;

const AppBar: React.FC = () => {
  const [ { theme },  ] = useStateValue();
  const [ barTheme, setBarTheme] = useState<TitleBarTheme | undefined>();

  useEffect(() => {
    setBarTheme((theme === 'dark') ? titleBarDark : titleBarLight);
  }, [theme]);

  if(ipcRenderer.isMock) return <></>;

  
  return (
    <TitleBar
      icon={<img src={icon} className="icon" alt="icon" />}
      // app="Electron"
      title="GeoPop"
      theme={barTheme}
      // className="titleBar"
      onClose={() => ipcRenderer.send("close")}
      onMinimize={() => ipcRenderer.send("minimize")}
      onMaximize={() => ipcRenderer.send("maximize")}
      //onDoubleClick={() => { enqueueSnackbar('double clicked', { variant: 'success' }) }}
    />
  );
};

export default AppBar;
