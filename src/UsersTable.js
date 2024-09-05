import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows}) => {
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
                {
                rows.map(row => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' :{border:0}}}>
                        <TableCell component='th' scope='row'>{row.id}</TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>

}

export default UsersTable;