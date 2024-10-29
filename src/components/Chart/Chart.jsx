
import BChart from '../BarCharts/BChart';
import StudentBars from '../StudentBar/StudentBars';
import LinesChart from './../LineChart/LinesChart';
import MyAssignment from './../MyAssignment/MyAssignment';

function Chart() {
  return (
    <>
      {/* show charts here */}
    <LinesChart></LinesChart>
    {/* BarChart  */}
    <BChart></BChart>

    <StudentBars></StudentBars>

    <MyAssignment />
    </>
  );
}

export default Chart;
