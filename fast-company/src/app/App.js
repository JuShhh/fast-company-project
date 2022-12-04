import React, { useState } from "react";
import api from "../app/api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

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
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};

export default App;
