import React from "react";
import PropTypes from "prop-types";

class CourseCard extends React.Component {
    render() {
        const { title, duration, instructor } = this.props;
        return (
            <>
                <p>{title}</p>
                <p>{duration}</p>
                <p>{instructor}</p>
            </>
        );
    }
}

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number,
    instructor: PropTypes.string.isRequired
};

export default CourseCard;