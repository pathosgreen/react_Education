import { collection, query, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { Table } from "react-bootstrap";

function UserList(){
    const [users, setUsers] = useState();

    const q = query(collection(db, "users"));
        onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            let user = doc.data();
            user.id = doc.id;
            users.push(user);
        });
        console.log(users);
    });

    return (<>
        <h2>User List</h2>
        <Table responsive>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
            </tr>
            {
                users.map((user) =>{
                    return(<tr key={user.id}>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                    </tr>)
                })
            }
        </Table>
    </>)
}

export default UserList;