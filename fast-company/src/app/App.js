import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userID) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userID)
        );
    };
    const handleToggleBookmark = (id) => {
        setUsers(
            users.map((us) =>
                us._id === id ? { ...us, bookmark: !us.bookmark } : us
            )
        );
    };

    return (
        <div>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookmark}
                />
            )}
        </div>
    );
};

export default App;
