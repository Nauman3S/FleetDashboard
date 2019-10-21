import React from "react";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Fab from '@material-ui/core/Fab';
import Phone from "@material-ui/icons/Phone";
import { useState } from "react";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function WiFiPage() {
  const classes = useStyles();

  const [WiFiStates,setWiFiState] = useState("")
    
    const onWiFi = event => {
        setWiFiState("on")
        
    }
    const offWiFi = event => {
      setWiFiState("off")
      
  }
  const resetWiFi = event => {
    setWiFiState("reset")
    
}
    const  OnWiFiHandler = async () => {
      try {
        //var add={"add":"mm;;;;;22"}
        onWiFi();
        const result = await axios.post("http://localhost:8000/admin/wifiOn",{WiFiStates})
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    const  OffWiFiHandler = async () => {
      try {
        //var add={"add":"mm;;;;;22"}
        offWiFi();
        const result = await axios.post("http://localhost:8000/admin/wifiOff",{WiFiStates})
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    const  resetWiFiHandler = async () => {
      try {
        //var add={"add":"mm;;;;;22"}
        resetWiFi();
        const result = await axios.post("http://localhost:8000/admin/wifiReset",{WiFiStates})
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
      
    }
  
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>WiFi Settings</h4>
        <p className={classes.cardCategoryWhite}>
          WiFi Hotspot related settings.
        </p>
      </CardHeader>
      <CardBody>

     
    <GridContainer>
      <GridItem xs={5} sm={5} md={5}>
      <Button color="primary" fullWidth  onClick={ OnWiFiHandler} >
                  Turn On Hotspot
                  
        </Button>
        </GridItem>
        <GridItem xs={5} sm={5} md={5}>
        <Button color="rose" fullWidth onClick={OffWiFiHandler}>
                  Turn Off Hotspot
        </Button>
    </GridItem>
    <GridItem xs={5} sm={5} md={5}>
        <Button color="white" fullWidth onClick={resetWiFiHandler}>
                  Reset Settings
        </Button>
        </GridItem>
    </GridContainer>
<br/>
<GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Hotspot Name"
                    id="vehicle-number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

        </GridContainer>
      </CardBody>
    </Card>
  );
}
