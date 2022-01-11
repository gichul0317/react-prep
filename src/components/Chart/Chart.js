import ChartBar from '../ChartBar/ChartBar';
import './Chart.scss';

function Chart(props) {
  const valueArr = props.dataPoints.map(item => item.value);
  console.log(valueArr);
  const totalMaximum = Math.max(...valueArr);

  return (
    <div className="chart">
      {
        props.dataPoints.map(item =>
          <ChartBar
            key={item.label}
            value={item.value}
            maxValue={totalMaximum}
            label={item.label}
          />)
      }
    </div>
  )
}

export default Chart;