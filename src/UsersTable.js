import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = props => {
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
                
            </TableBody>
        </Table>
    </TableContainer>

}

export default UsersTable;