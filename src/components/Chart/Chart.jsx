import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['January2019','February2019','March2019','April2019','May2019'],
        datasets: [
          {
            label: "Fixed",
            backgroundColor: "RGBA(0,131,0,0.75)",
            borderColor: "RGBA(0,131,0,0.90)",
            data: [4,15,46,15,4,2,3]
          },
          {
            label: "Libor",
            backgroundColor: "RGBA(255,255,92,0.75)",
            borderColor: "RGBA(255,255,92,0.90)",
            data: [34,5,21,0,12,4,2]
          },
          {
            label: "Swap",
            backgroundColor: "RGBA(0,255,92,0.75)",
            borderColor: "RGBA(0,255,92,0.90)",
            data: [1,48,1,2,10,24]
          }
        ]
      }
    }
  }
  render() {  
  return (
    <>
    <div className="Chart" style={{position:"relative", width:800, height:750, marginLeft:"2%"}}>
      <h3 style={{display: "flex", justifyContent:"center"}}> Example Chart</h3>
      <Line
        options={{
          responsive: true
        }}
        data = {this.state.data}
      />
    </div>
    </>
  );
 }
}

