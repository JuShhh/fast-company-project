import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {status
                ? (
                    <i className="bi bi-bookmark-star-fill"></i>
                )
                : (
                    <i className="bi bi-bookmark-star"></i>
                )}
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default Bookmark;
