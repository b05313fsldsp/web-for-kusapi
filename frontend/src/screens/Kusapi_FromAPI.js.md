import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./Kusapi.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
//
import { Playground, PropsTable } from 'docz'
import Component from 'react-component-component';

<Playground>
  <Component 
    initialState={{dataLoadingStatus: "loading", chartData:[]}}
    didMount={async function(component) {
      const response = await fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD");
      const json = await response.json();
      const rateCurrencyNames = Object.keys(json.rates);
      const rateCurrencyValues = Object.values(json.rates);
      const chartData = [["Currency Name", "Currency Rate"]]
      for (let i = 0; i < rateCurrencyNames.length; i += 1) {
        chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
      }
      component.setState({
        dataLoadingStatus: "ready",
        chartData: chartData
      })
    }}
  >

   {
const Kusapi = (component) => {
        return component.state.dataLoadingStatus==="ready" ?
          <Chart 
            chartType="BarChart"
            data={component.state.chartData}
            options={{
              chartArea: {
                width:"50%"
              },
              title:"EUR Price"
            }}

            rootProps={{ 'data-testid': '1' }}
          />
          : <div>Fetching data from API</div>
      }
    }
  </Component>
</Playground>

export default Kusapi;


