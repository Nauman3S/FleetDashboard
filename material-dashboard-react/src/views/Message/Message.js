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
import Message from "@material-ui/icons/Message";
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

export default function MessagePage() {
  const classes = useStyles();
  const [message, setMessage] = useState("")

    const inputChangeHandler = event => {
        setMessage(event.target.value)
    }

    const  messageHandler = async () => {
      try {
        const result = await axios.post("http://localhost:5000/admin/message",{message})
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
      
    }

    
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Messages</h4>
        <p className={classes.cardCategoryWhite}>
          Enter a Vehicle Number to Message.
        </p>
      </CardHeader>
      <CardBody>

      <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Vehicle Number"
                    id="vehicle-number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

        </GridContainer>
    <GridContainer>
      <GridItem xs={5} sm={5} md={2}>
      <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  1
        </Button>
        </GridItem>
        <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  2
        </Button>
    </GridItem>
    <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  3
        </Button>
        </GridItem>
    </GridContainer>
<br/>
<GridContainer>
      <GridItem xs={5} sm={5} md={2}>
      <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  4
        </Button>
        </GridItem>
        <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  5
        </Button>
    </GridItem>
    <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  6
        </Button>
        </GridItem>

        <GridItem xs={5} sm={5} md={5}>
      
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
          onClick={messageHandler}
        >
          <Message className={classes.extendedIcon} full />
          Send
        </Fab>
        </GridItem>
      

    </GridContainer>
        <br/>

        <GridContainer>
      <GridItem xs={5} sm={5} md={2}>
      <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  7
        </Button>
        </GridItem>
        <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  8
        </Button>
    </GridItem>
    <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  9
        </Button>
        </GridItem>

    </GridContainer>
    
        <br />
        <GridContainer>
      <GridItem xs={5} sm={5} md={2}>
      <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  *
        </Button>
        </GridItem>
        <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  0
        </Button>
    </GridItem>
    <GridItem xs={5} sm={5} md={2}>
        <Button color="white" fullWidth onClick={() =>  alert("I am an alert box!")}>
                  #
        </Button>
        </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xs={15} sm={15} md={12}>
      <InputLabel style={{ color: "#AAAAAA" }}  >Message to send</InputLabel>
                  <CustomInput
                    labelText="Type your message here."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value:message,
                      onChange:inputChangeHandler
                    }}
                  />
          </GridItem>
        </GridContainer>  
      </CardBody>
    </Card>
  );
}
