import { CartesianGrid, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Quiz 1", math: 1, english: 78 },
  { name: "Quiz 2", math: 25, english: 85 },
  { name: "Midterm Exam", math: 50, english: 80 },
  { name: "Quiz 3", math: 75, english: 87 },
  { name: "Quiz 4", math:100, english: 83 },
  { name: "Final Exam", math: 125, english: 89 },
];


function LinesChart() {
  return (
    <LChart width={700} height={500} data={data}>
        <Line dataKey="math" stroke="green"/>
        <Line dataKey="english" stroke="red"/>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LChart>
  )
}

export default LinesChart