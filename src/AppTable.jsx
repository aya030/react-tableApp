import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

const rows = [
  {
    id: 1,
    startDate: '8:00',
    endDate: '12:00',
    actives: {
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: false,
    },
  },
  {
    id: 2,
    startDate: '14:00',
    endDate: '18:00',
    actives: {
      mon: true,
      tue: true,
      wed: true,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
    },
  },
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
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.startDate}〜{row.endDate}
                </TableCell>
                {Object.entries(row.actives).map((active) => (
                  <TableCell
                    key={active[0]}
                    style={{ fontSize: '30px', color: '#1976d2' }}
                    align="center">
                    {active[1] ? '●' : '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default AppTable;
