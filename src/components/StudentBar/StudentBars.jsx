
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data: Students' assignment marks
const studentsData = [
  { name: 'Ethan', assignments: [60, 60, 60, 60, 50, 47, 53, 56, 57, 58, 60, 60] },
];

// Transform data to display each assignment as a separate column
const transformedData = studentsData.map((student) => {
  const assignments = student.assignments.reduce((acc, mark, idx) => {
    acc[`Assignment ${idx + 1}`] = mark;
    return acc;
  }, { name: student.name });
  return assignments;
});

const StudenBars = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 60]} />
        <Tooltip />
        <Legend />
        
        {/* Render each assignment as a separate bar */}
        {[...Array(12).keys()].map((_, index) => (
          <Bar key={index} dataKey={`Assignment ${index + 1}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StudenBars;