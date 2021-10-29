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
import Tanklevel from './Tanklevel'
import Concentration from './Concentration'



const MonitorScreen = ({ location, history }) => {
  var chartData = [];
  const [tqss, setTqss] = useState([])

  const [data, setData] = useState({});
  const api_url = 'http://10.3.1.93:8081/monitor/tqs';


  useEffect(() => {

    const getTqssData = async () => {
      await fetch("http://10.3.1.93:8081/monitor/tqs")  // https://disease.sh/v3/covid-19/countries
        .then((responce) => responce.json())
        .then((data) => {
          
          // [item1, item2, item3]

          // ^^^ item1 ... -> returning an object in a shape
          // ^^^ item2 ... -> returning an object in a shape
          // ^^^ item2 ... -> returning an object in a shape

          const tqss = data.map((tqs) => ({      // countries
            name: tqs.sn, //United Kingdom, Unites States Of America, India,
            value: tqs.status, //UK, USA, IND
            value2: tqs.tanklevel, //UK, USA, IND
            value3: tqs.concentration //UK, USA, IND
          }));
          //dc-
          console.log(tqss);
/*
          const sortedData = sortData(data);
          setTableData(sortedData);
*/
          setTqss(tqss);

        });
    };
    
          getTqssData();


  }, []);


  return (
    <MainScreen title="TQS Dynamic Monitor">
    <div>
         {/* Graphs */}
    
          <Tanklevel/>
    </div>
     <div>

         {/* Graphs */}
          
          <Concentration/>
                  
    </div>

    </MainScreen>
  );
};

export default MonitorScreen;
