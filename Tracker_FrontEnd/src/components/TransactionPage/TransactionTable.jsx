import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";
import { Chip } from '@mui/material';
function createData(Expenses,category,amount,Transaction) {
  return { Expenses,category,amount,Transaction};
}

const rows = [
  createData('Food',"Food",2344,"out"),
  createData('Ice cream sandwich',"Food",60,'out'),
  createData('Shopping',"Shop",7000,'out'),
  createData('Gingerbread',"Food",70,'in'),
  createData('Ice cream sandwich',"Food",60,'out'),
  createData('Ice cream sandwich',"Food",60,'out'),
  createData('Ice cream sandwich',"Food",60,'out'),
  createData('Ice cream sandwich',"Food",60,'out'),
  createData('Shopping',"Shop",7000,'out'),
  createData('Shopping',"Shop",7000,'out'),
  createData('Shopping',"Shop",7000,'out'),
  createData('Shopping',"Shop",7000,'out'),
  createData('Shopping',"Shop",7000,'out'),
];


export default function TransactionTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Expense</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align='center'>Transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Expenses}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' sx={{"fontSize":13}}>
                {row.Expenses}
              </TableCell>
              <TableCell align='center'>
                <Chip label={row.category} color="primary" size='small' />
              </TableCell>
              <TableCell align="center" >{row.amount}</TableCell>
              <TableCell align="center" >
                {row.Transaction === 'out' ? <MdArrowOutward /> : row.Transaction === 'in' ?<HiOutlineArrowDownLeft /> : null}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}