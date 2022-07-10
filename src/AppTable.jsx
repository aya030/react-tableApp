import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function createData(time, wed1, wed2, wed3, wed4, wed5, wed6, wed7) {
  return { time, wed1, wed2, wed3, wed4, wed5, wed6, wed7 };
}

const rows = [
  createData('8:00〜12:00', '●', '●', '●', '●', '●', '●', '-'),
  createData('14:00〜17:00', '●', '●', '●', '-', '●', '-', '-'),
];

function AppTable() {
  return (
    <>
      <TableContainer className="table" component={Paper} sx={{ maxWidth: 650 }}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>受付時間</TableCell>
              <TableCell align="center">月</TableCell>
              <TableCell align="center">火</TableCell>
              <TableCell align="center">水</TableCell>
              <TableCell align="center">木</TableCell>
              <TableCell align="center">金</TableCell>
              <TableCell align="center">土</TableCell>
              <TableCell align="center">日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.time} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed1}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed2}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed3}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed4}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed5}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed6}
                </TableCell>
                <TableCell style={{ fontSize: '30px', color: '#1976d2' }} align="center">
                  {row.wed7}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default AppTable;
