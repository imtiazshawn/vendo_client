"use client"
import React, { useEffect, useState } from 'react';
import StatCard from '@/components/Dashboard/StatCard';
import { fetchSalesReport, fetchOrdersReport, fetchUsersReport, fetchVisitorsReport } from '@/src/actions/dashboard/states';

const Dashboard = () => {
  const [salesData, setSalesData] = useState({ value: "$0.00", chartData: [] });
  const [ordersData, setOrdersData] = useState({ value: "$0.00", chartData: [] });
  const [usersData, setUsersData] = useState({ value: "$0.00", chartData: [] });
  const [visitorsData, setVisitorsData] = useState({ value: "$0.00", chartData: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesResponse = await fetchSalesReport();
        const ordersResponse = await fetchOrdersReport();
        const usersResponse = await fetchUsersReport();
        const visitorsResponse = await fetchVisitorsReport();

        setSalesData({
          value: salesResponse.total_sales || "$0.00",
          chartData: salesResponse.chartData || []
        });

        setOrdersData({
          value: ordersResponse.total_amount || "$0.00",
          chartData: ordersResponse.chartData || []
        });

        setUsersData({
          value: usersResponse.total_users || "$0.00",
          chartData: usersResponse.chartData || []
        });

        setVisitorsData({
          value: visitorsResponse.total_visitors || "$0.00",
          chartData: visitorsResponse.chartData || []
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Top Sales" 
        value={salesData.value} 
        chartColor="#3FDB9D" 
        chartData={salesData.chartData} 
      />
      <StatCard 
        title="Top Orders" 
        value={ordersData.value} 
        chartColor="#FFC444" 
        chartData={ordersData.chartData} 
      />
      <StatCard 
        title="Visitors" 
        value={visitorsData.value} 
        chartColor="#FC575D" 
        chartData={visitorsData.chartData} 
      />
      <StatCard 
        title="Total Users" 
        value={usersData.value} 
        chartColor="#31434D" 
        chartData={usersData.chartData} 
      />
    </div>
  );
};

export default Dashboard;
