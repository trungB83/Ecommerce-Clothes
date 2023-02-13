import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ orderData }) => {

    // var counts = orderData.reduce((c, { status: key }) => (c[key] = (c[key] || 0) + 1, c), {});
    // console.log(counts);
    const countActive = orderData?.filter(({ status }) => status === 'active').length
    const countInActive = orderData?.filter(({ status }) => status === 'inactive').length
    const countComplete = orderData?.filter(({ status }) => status === 'completed').length
    const countCancelled = orderData?.filter(({ status }) => status === 'cancelled').length
    const dataStatus = [countActive, countInActive, countComplete, countCancelled]

    const statusLabel = ['Kích hoạt', 'Không kích hoạt', 'Hoàn thành', 'Hủy bỏ']

    var data = {
        labels: statusLabel,
        datasets: [
            {
                label: '# of Đơn hàng',
                data: dataStatus,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(93,93,93, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    }

    return (
        <div>
            <Pie
                data={data}
                height={400}
                options={options}

            />
        </div>
    )
}

export default PieChart