// This is the default theme

import { TitleBarTheme } from "frameless-titlebar/dist/title-bar/typings";

// Override any of these values by passing object into TitleBar Element via the theme property
export const titleBarDark: TitleBarTheme = {
  menu: {
    // palette: theme.palette.type,
    // style: state.menuStyle,
    // header: {
    //   show: state.subLabels,
    // },
    // list: {
    //   background: theme.palette.background.default
    // },
    // item: {
    //   active: {
    //     background: theme.palette.secondary.light
    //   }
    // }
  },
  bar: {
    palette: 'light',
    background: '#555e',
    borderBottom: '',
    icon: {
      width: 18,
      height: 18
    },
    button: {
      active: {
        color: '#fff',
        background: '#fff'
      }
    },
    title: {
      color: '#fff'
    }
  },
  // controls: { // EI TOIMI
  //   normal: {
  //     color: "#f00"
  //   },
  //   hover: {
  //     color: "#000",
  //     background: "#000"
  //   }
  // }
};

export const titleBarLight: TitleBarTheme = {
  bar: {
    palette: 'light',
    background: '#2e8b57dd',
    borderBottom: '',
    icon: {
      width: 19,
      height: 19
    },
    button: {
      active: {
        color: '#fff',
        background: '#fff'
      }
    },
    title: {
      color: '#fff'
    }
  }
};