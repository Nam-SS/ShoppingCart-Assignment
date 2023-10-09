import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { AMTTOBEPAID, ITEMSINCART, PRICE, PRODUCTS, QTY, TOTAL } from '../utils/Constants';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function CalculateTotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}


export default function Cart() {
   const cart = useSelector((state) => state.cart)
   console.log("cart in cart:",cart);
   const rows = cart?.map((item)=>createRow(item.name,item.quantity,item.price))
   
  const Total = CalculateTotal(rows);

  return (
    <Box sx={{mx: 'auto', m: 7, p: 7 }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              {ITEMSINCART}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{PRODUCTS}</TableCell>
            <TableCell align="right">{QTY}</TableCell>
            <TableCell align="right">{PRICE}</TableCell>
            <TableCell align="right">{TOTAL}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>{AMTTOBEPAID}</TableCell>
            <TableCell align="right">{ccyFormat(Total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
