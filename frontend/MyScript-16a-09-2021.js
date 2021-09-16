import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./MyScript.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//a.
import { Chart } from "react-google-charts";

const Counter = () => (
    <div className="container">
      <div className="chevron chevron-up" />
      <div className="number">256</div>
      <div className="chevron chevron-down" />
    </div>
);

const DidMount = () => (
      // const response = await fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD");
      // const json = await response.json();
      // const rateCurrencyNames = Object.keys(json.rates);
      // const rateCurrencyValues = Object.values(json.rates);
      // const chartData = [["Currency Name", "Currency Rate"]]
      // for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      //  chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
      // }
      DidMount.setState({
        dataLoadingStatus: "ready",
        chartData: chartData
      })
)


const MyScript = (didMount) => {

  return (
    <MainScreen title="MyScript API">
      <div className="MyApp">
          <Chart 
            chartType="BarChart"
            data={didMount.state.chartData}
            options={{
              chartArea: {
                width:"50%"
              },
              title:"EUR Price"
            }}

            rootProps={{ 'data-testid': '1' }}
          />
          : <div>Fetching data from API</div>
      </div> 

    </MainScreen>
  );
};

export default MyScript;


