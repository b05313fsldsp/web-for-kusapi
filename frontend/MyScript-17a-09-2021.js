/* dc- MyScript-16b-09-2021.js */
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


const Componentz = () => {
  
  // let count = 256;
  // STEP 2:
  // 透過 useState 建立 `count` 這個變數，預設值設為 256
  // 並取得修改變數的 `setCount` 方法
  const [count, setCount] = useState(256);

  return (
    <div className="container">
      // dc-
      <div className="chevron chevron-up" 
      onClick={() => {
          //count = count + 1;
           // STEP 3: 使用 setCount 方法來改變 count 的值
          setCount(count + 1);
          console.log(`current Count is ${count}`);
        }}
      />
      <div className="number">{count}</div>
      <div className="chevron chevron-down" />
    </div>
  );
};

const Counter = () => {
  
  // let count = 256;
  // STEP 2:
  // 透過 useState 建立 `count` 這個變數，預設值設為 256
  // 並取得修改變數的 `setCount` 方法
  const [count, setCount] = useState(256);

  return (
    <div className="container">
      // dc-
      <div className="chevron chevron-up" 
      onClick={() => {
          //count = count + 1;
           // STEP 3: 使用 setCount 方法來改變 count 的值
          setCount(count + 1);
          console.log(`current Count is ${count}`);
        }}
      />
      <div className="number">{count}</div>
      <div className="chevron chevron-down" />
    </div>
  );
};


const MyScript = (Component) => {

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
          <Counter />
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


