import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./MyScript.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";


const MyScript = ({ location, history }) => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540]
  ];
  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" }
  };

  return (
    <MainScreen title="My Script">
      <div className="MyApp">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>      
    </MainScreen>
  );
};

export default MyScript;
