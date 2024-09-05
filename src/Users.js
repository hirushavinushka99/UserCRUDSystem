import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Prasad',
    },
    {
        id: 2,
        name: 'Prasadi',
    }
]

const Users = () => {
    return (
        <Box>
            <UserForm/>
            <UsersTable/>
        </Box>
        
        
    );

}

export default Users;