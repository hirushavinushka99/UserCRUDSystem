import { Button, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => console.log(`Update ${row.id}`)}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => console.log(`Delete ${row.id}`)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center">No Data</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
