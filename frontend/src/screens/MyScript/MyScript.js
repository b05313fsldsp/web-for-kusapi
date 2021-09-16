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

const kusUrl = "http://10.3.1.194:8081/api/tutorials";


const DidMount = async () => {
      const response = await fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD");
      const json = await response.json();
      const rateCurrencyNames = Object.keys(json.rates);
      const rateCurrencyValues = Object.values(json.rates);
      const chartData = [["Currency Name", "Currency Rate"]]
      for (let i = 0; i < rateCurrencyNames.length; i += 1) {
        chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
      }
      // component.setState({
      //  dataLoadingStatus: "ready",
      //  chartData: chartData
      // }
      // )
}


const MyScript = (didMount) => {

const [userData, setUserData] = useState({});

useEffect(() => {
  getKusApiUserWithFetch();
}, []);

const getKusApiUserWithFetch = async () => {
  const response = await fetch(kusUrl);
  const jsonData = await response.json();
  setUserData(jsonData);
};

  return (
    <MainScreen title="MyScript API">
      <div className="MyApp">
          <Chart 
            chartType="LineChart"
            // data={component.state.chartData}
            data={userData}
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


