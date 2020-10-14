/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Grid } from "semantic-ui-react";
import ThemeSwitch from "./components/ThemeSwitch";
import AppBar from "./components/AppBar";
import MapContainer from "./MapContainer";

const App: React.FC = () => {

  return (
    <div>
      <AppBar />
      
      <Grid className="pb-0" >
        <Grid.Row columns={2}>
          <Grid.Column width={4} >
            <ThemeSwitch />
          </Grid.Column>
          <Grid.Column className="pr-0" width={12} >
            <MapContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
