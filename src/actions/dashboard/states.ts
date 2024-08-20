import axios from 'axios';
import { getCookie } from 'cookies-next';

import { baseURL } from '../baseUrl';

const apiClient = axios.create({
  baseURL: baseURL,
});
const token = getCookie('token');

export const fetchSalesReport = async () => {
  try {
    const response = await apiClient.get('/api/admin/reports/sales-report', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sales report:', error);
    throw error;
  }
};

export const fetchOrdersReport = async () => {
  try {
    const response = await apiClient.get('/api/admin/reports/orders-report', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders report:', error);
    throw error;
  }
};

export const fetchUsersReport = async () => {
  try {
    const response = await apiClient.get('/api/admin/reports/users-report', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users report:', error);
    throw error;
  }
};

export const fetchVisitorsReport = async () => {
  try {
    const response = await apiClient.get('/api/admin/reports/visitors', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching visitors report:', error);
    throw error;
  }
};
