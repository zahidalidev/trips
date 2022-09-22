import {
  Chart,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
)

const VerticalChart = ({ details, label, options }) => {
  const chartDetails = {
    labels: details?.labels,
    datasets: [
      {
        fill: true,
        label,
        data: details?.data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Line options={options} data={chartDetails} />
}

export default VerticalChart
