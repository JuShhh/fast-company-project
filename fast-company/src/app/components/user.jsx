import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToggleBookmark
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((qual) => (
                    <Qualities key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default User;
