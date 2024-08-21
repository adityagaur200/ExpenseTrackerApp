import React, { useEffect, useState } from 'react';
import { Divider, Stack, Typography, CircularProgress, Alert } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {PieChart} from "@mui/x-charts"

const Graph = () => {
    const [spent, setSpent] = useState(0);
    const [budget, setBudget] = useState(0);
    const [linechart, setLineChart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getDetails() {
            try {
                // Fetch expense data
                const expenseResponse = await fetch("http://localhost:8090/expense/history");
                if (!expenseResponse.ok) throw new Error('Error fetching expense data');
                const expenseData = await expenseResponse.json();

                // Process data for line chart
                const processedData = expenseData.map(item => ({
                    date: new Date(item.date).toLocaleDateString(), // Ensure date is formatted properly
                    amount: item.amount,
                }));
                setLineChart(processedData);

                // Fetch budget data
                const budgetResponse = await fetch('http://localhost:8090/budget/all');
                if (!budgetResponse.ok) throw new Error('Error fetching budget data');
                const budgetData = await budgetResponse.json();

                // Set budget and expenditure values
                const totalBudget = budgetData.Amount;
                setBudget(totalBudget);

                const totalExpenditure = expenseData.reduce((total, item) => total + item.amount, 0);
                setSpent(totalExpenditure);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getDetails();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Stack direction={'row'} m={4} mb={0}>
            <Stack>
                <Typography fontSize={14} fontWeight={'bold'}>
                    Day-to-Day
                </Typography>
                <LineChart
                    width={410}
                    height={300}
                    data={linechart}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
            </Stack>
            <Divider orientation='vertical' variant='middle' flexItem />
            <Stack ml={2}>
                <Typography fontWeight={"bold"} fontSize={14}>
                    Month-to-Month
                </Typography>
                <PieChart
  series={[
    {
      data: [
        { id: 0, value: spent, label: 'Spent' },
        { id: 1, value: budget-spent, label: 'Balance Left' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
                
            </Stack>
        </Stack>
    );
};

export default Graph;
