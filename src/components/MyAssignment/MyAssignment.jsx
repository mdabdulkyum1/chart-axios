import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const MyData = [
    { name: "Assignment 1", marks: 60 },
    { name: "Assignment 2", marks: 60 },
    { name: "Assignment 3", marks: 60 },
    { name: "Assignment 4", marks: 60 },
  ];
  
  function MyAssignment() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={MyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis domain={[0, 60]} tickCount={10} /> {/* Domain from 0 to 100 with 10 intervals */}
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="marks" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  export default MyAssignment;
  