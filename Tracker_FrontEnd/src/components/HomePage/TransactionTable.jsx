import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

async function fetchExpenseHistory() {
  try {
    const response = await fetch('http://localhost:8090/expense/history');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export default function TransactionTable() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const data = await fetchExpenseHistory();
        setRows(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getExpenses();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Transaction table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Expense</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align='center'>Transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0,4).map((row, index) => (
            <TableRow
              key={index} // Using index as key for simplicity; consider a unique identifier if available
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' sx={{ fontSize: 13 }}>
                {row.subject}
              </TableCell>
              <TableCell align='center'>
                <Chip label={row.category} color="primary" size='small' />
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
