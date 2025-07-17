import React from "react";
import PropTypes from "prop-types";

const Message = ({ name = "Datta", age = 23}) => {
    return (
       <>
           <p>My name is {name} and my age is {age}</p>
           <p>{age >= 18 ? "More than 18" : "Less than 18"}</p>
       </>
    );
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

export default Message;