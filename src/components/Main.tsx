import React from "react";
import { Grid } from "semantic-ui-react";
import MapContainer from "./map/MapContainer";
import ThemeSwitch from "./theme/ThemeSwitch";

const Main: React.FC = () => {

  return (
    <>
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
    </>
  );
};

export default Main;
