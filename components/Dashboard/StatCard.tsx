"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StatCardProps {
  title: string;
  value: string;
  chartColor: string;
  chartData: number[];
}

const StatCard: React.FC<StatCardProps> = ({ title, value, chartColor, chartData }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      colors: [chartColor],
      type: 'gradient',
    },
    colors: [chartColor],
    tooltip: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      data: chartData,
    },
  ];

  return (
    <div className="bg-[color:var(--white)] rounded-lg shadow p-4 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h2 className="text-2xl font-semibold text-[color:var(--heading-text)]">{value}</h2>
        </div>
        {isClient && (
          <div className="w-20 h-16">
            <Chart options={chartOptions} series={chartSeries} type="area" height={60} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
