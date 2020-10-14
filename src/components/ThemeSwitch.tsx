import React from "react";
import { Checkbox, CheckboxProps } from "semantic-ui-react";
import { switchTheme, useStateValue } from "../state";

const ThemeSwitch: React.FC = () => {
  const [, dispatch] = useStateValue();

  const handleSwitchEvent = (e: React.MouseEvent<HTMLInputElement>, data: CheckboxProps) => {
    e.preventDefault();
    dispatch( switchTheme(data.checked) );
  };

  return (
    <>
      <Checkbox slider onClick={ handleSwitchEvent } className="theme-switch" />
    </>
  );
};

export default ThemeSwitch;
