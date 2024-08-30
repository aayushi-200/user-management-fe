import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CandlestickChart = ({ chartData }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const series = [
        {
            name: "Candlestick",
            data: [
                {
                    x: chartData?.script || '',
                    y: [
                        chartData?.dayLow || 0, 
                        chartData?.dayHigh || 0, 
                        chartData?.dayLow || 0,  
                        chartData?.close || 0,   
                    ],
                },
            ],
        },
    ];

    const options = {
        chart: {
            type: "candlestick",
            height: 250,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: "category",
            title: {
                text: "Script",
            },
        },
        yaxis: {
            title: {
                text: "Price",
            },
            labels: {
                formatter: (value) => value.toFixed(2),
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    };

    return (
        <Chart
            options={options}
            series={series}
            type="candlestick"
            height={220}
            width="100%"
        />
    );
};

export default CandlestickChart;
