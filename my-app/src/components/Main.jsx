import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Log} from './Log';
import { LiveLog } from './LiveLog';
import ParentMetrics from './ParentMetrics';


const Main = (props) => {
  return (
    <Routes> 
      <Route exact path='/logs' element={ props.live? <LiveLog  duration={props.duration}/> :<Log duration={props.duration}/>}> </Route>
      <Route exact path='/metrics' element={<ParentMetrics duration={props.duration}/>}></Route>
    </Routes>
  );
}

export default Main;
