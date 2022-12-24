import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { GetOrdersAsync, selectAllOrders } from '../Slicers/GetAllOrdersSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { selectToken } from '../Slicers/loginSlice';

const columns = [
    { id: '_id', label: 'OrderID', minWidth: 170 },
    { id: 'city', label: 'City', minWidth: 170 },
    { id: 'district', label: 'District', minWidth: 170 },
    { id: 'phone_num', label: 'Phone Number', minWidth: 170 },
    { id: 'postal_code', label: 'Postal Code', minWidth: 170 },
    { id: 'Total', label: 'Total', minWidth: 170 },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];



export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const AllOrders = useSelector(selectAllOrders)
    const [All, setAll] = useState([])
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const rows = AllOrders


     useEffect(() => {
        dispatch(GetOrdersAsync({ "Token": token }))
            console.log(AllOrders)
     }, [token.length])

   
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                {console.log(AllOrders)}
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ height: "70px", fontSize: "25px" }} align="center" colSpan={8}>
                                My Orders:
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth, fontSize: "20px" }}

                                >
                                    {column.label}:
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ fontsize: "20px" }}>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow style={{ fontsize: "20px" }} hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell style={{ fontsize: "20px" }} key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : <p>{value}</p>}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                style={{ fontsize: "20px" }}
                rowsPerPageOptions={[10, 15, 30]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <button onClick={()=>dispatch(GetOrdersAsync({ "Token": token })) }>show</button>

        </Paper>
    );
}