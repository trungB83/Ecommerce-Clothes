import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
    Title
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
    PointElement
);

const BarChart = ({ orderData }) => {

    const dayCounts = orderData?.reduce(function (result, order) {
        let day = moment(order.created_at).format("DD-MM-YYYY");
        if (!result[day]) {
            result[day] = 0;
        }
        result[day]++;
        return result;
    }, {});
    const dataOrderByDate = Object.values(dayCounts);
    const labelOrderByDate = Object.keys(dayCounts);
    console.log(33,labelOrderByDate);

    const countComplete = orderData?.filter(({ status }) => status === 'completed')

    const orderCounts = countComplete?.reduce(function (result, order) {
        let day = moment(order.created_at).format("DD-MM-YYYY");
        if (!result[day]) {
            result[day] = 0;
        }
        result[day]++;
        return result;
    }, {});
    const dataCompleteOrderByDate = Object.values(orderCounts);


    const data = {
        labels: labelOrderByDate,
        datasets: [{
            label: `số lượng đơn hàng`,
            data: dataOrderByDate,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(220,220,220,0.8)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        },
        {
            label: "Đơn hàng thành công",
            data: dataCompleteOrderByDate,
            backgroundColor: 'rgba(155,231,91,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
        }]
    }
    const options = {
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
            <Bar
                data={data}
                options={options}
                height={400}
            />
        </div>
    )
}

export default BarChart