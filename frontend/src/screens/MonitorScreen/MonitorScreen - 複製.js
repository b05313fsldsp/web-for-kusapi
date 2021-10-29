import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./MonitorScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "hh:mm:ss", // "HH:mm",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },

      },
    ],
  },
};



const buildChartData = (data) => {
  let chartData = [];

  for (let tqs in data) {

     var newDataPoint = {
        x: data[tqs].tqstimestamps, // time : 4,
        y: data[tqs].tanklevel, // concentration, //+ Math.random(10), // temp2, concentration, SPN1761 : 3,
        y2: data[tqs].concentration, // concentration, //+ Math.random(10), // temp2, concentration, SPN1761 : 3,
      };
      chartData.push(newDataPoint);
    }

  return chartData;
};

const buildChartData2 = (data) => {
  let chartData = [];

  for (let tqs in data) {

     var newDataPoint = {
        x: data[tqs].tqstimestamps, // time : 4,
        y: data[tqs].concentration, // concentration, //+ Math.random(10), // temp2, concentration, SPN1761 : 3,
      };
      chartData.push(newDataPoint);
    }

  return chartData;
};

const MonitorScreen = ({ location, history }) => {
  var chartData = [];

  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const api_url = 'http://10.3.1.93:8081/monitor/tqs';


  /* 
    const headers = { 'Content-Type': 'application/json' }  //dc- SN : xxxxxxx
    fetch('https://api.npms.io/v2/search?q=react', { headers })
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));

  */

  useEffect(() => {

    const headers = { 'sn': 'XXXXXXXXXXXX' }  //dc- SN : XXXXXXXXXXXX
    const fetchData = async () => {
      // await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      await fetch(api_url, { headers })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var chartData = buildChartData(data);
          setData(chartData);
          //var chartData2 = buildChartData2(data2);
          //setData(chartData2);
          //dc-
          // console.log(chartData);
        });
    };

    fetchData();
    //dc-
    setInterval(fetchData, 1000);



  }, []);


  return (
    <MainScreen title="TQS Dynamic Monitor">
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderColor: "#000001",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderColor: "#000001",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>

    </MainScreen>
  );
};

export default MonitorScreen;
