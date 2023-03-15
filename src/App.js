import './App.css';
import React, {useState, useEffect} from 'react'
import {  Container } from "react-bootstrap";
import { person } from "./Components/Data";
import DatesCount from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";




function App() {
  const [pesonData, setPesonData] =useState(person)



  const onDelete=() =>{
    setPesonData([])

  }

  const onShow = () =>{
        setPesonData(person);

  }
   

  useEffect (() => {
       setPesonData([]) 
  }, []);

 
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={pesonData} />

        <DatesList person={pesonData} />
        <DatesAction deleteData={onDelete} showData={onShow} />
      </Container>
    </div>
  );
}

export default App;
