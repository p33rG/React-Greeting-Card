import React from 'react';
import ReactDom from 'react-dom';
import "./style.css";
let message = " ";
const time = new Date().getHours();
const stylecss = {};
if (time >= 1 && time < 12) {

  message = "Good Morning";
  stylecss.color = "green";

}
else if (time >= 12 && time < 19) {

  message = "Good Evening";
  stylecss.color = "orange";

}
else {
  message = "Good Night";
  stylecss.color = "black";

}
ReactDom.render(

  <>
    <div>
      <h1>Hello Sir, <span style={stylecss}>{message}</span>   </h1>

    </div>

  </>
  , document.getElementById('root'));  