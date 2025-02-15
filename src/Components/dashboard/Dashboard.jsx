// import React from 'react';
// import "./Dashboard.css"

// function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard
import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, ArcElement, CategoryScale } from "chart.js";
import "./Dashboard.css"; // Import CSS for styling

import { LineChart, Line as RechartsLine, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";


import home from "/src/assets/Vector.svg";
import Setting_icon from "/src/assets/icons8-settings.svg";
import graph_last from "/src/assets/Screenshot (4).png"


// Register chart components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, ArcElement, CategoryScale);

const Dashboard = () => {
    
    // Battery Data
    const batteryData = {
        labels: ["Remaining", "Consumed"],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: ["#2F80ED", "#F2C94C"],
            },
        ],
    };

    const data = [
        { name: "Day 1", value: 60 },
        { name: "Day 2", value: 80 },
        { name: "Day 3", value: 70 },
        { name: "Day 4", value: 90 },
        { name: "Day 5", value: 85 },
      ];


    return (
        <>
      <div className="all">
        <div className="dashboard_container">
            <div className="dashboard_sidebar">
                <div className="home">
                    <img src={home} alt="home" />
                </div>
                <div className="setting">
                    <img src={Setting_icon} alt="" />
                </div>
            </div>
            <div className="dashboard_main">
                <div className="flex1">


                    <div className="flex1a">
    <div className="inventory-card">
      <div className="header">
        <span>Inventory</span>
        <span className="days">7 days ▼</span>
      </div>
      <div className="percentage">93%</div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="yellow" stopOpacity={0.8} />
              <stop offset="95%" stopColor="yellow" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: "white" }} hide />
          <YAxis tick={{ fill: "white" }} hide />
          <RechartsTooltip contentStyle={{ backgroundColor: "#0a4c66", border: "none", color: "white" }} />
          <Area type="monotone" dataKey="value" stroke="yellow" fill="url(#colorYellow)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
                    </div> <div className="flex1b">  
                          <div className="Orders-card">
      <div className="header">
        <span>Orders</span>
        <span className="days">7 days ▼</span>
      </div>
      <div className="percentage">65%</div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorpink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="pink" stopOpacity={0.8} />
              <stop offset="95%" stopColor="pink" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: "white" }} hide />
          <YAxis tick={{ fill: "white" }} hide />
          <RechartsTooltip contentStyle={{ backgroundColor: "#0a4c66", border: "none", color: "white" }} />
          <Area type="monotone" dataKey="value" stroke="pink" fill="url(#colorpink)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
                </div>
                <div className="flex2">
                      <div className="dashbord_container">
      
        <div className="dashboard-container">
            {/* Battery Card */}
            <div className="card battery-card">
                <div className="card-header">
                    <span>Battery</span>
                    <span className="menu">⋮</span>
                </div>
                <div className="battery-container">
                    <Doughnut data={batteryData} options={{ responsive: true, cutout: "75%" }} />
                    <div className="battery-text">65%</div>
                </div>
                <div className="battery-legend">
                    <span className="dot blue"></span> Remaining
                    <span className="dot yellow"></span> Consumed
                </div>
            </div>
        </div>
        </div>
                </div>
                <div className="flex3">
                    <img src={graph_last} /> </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Dashboard;
