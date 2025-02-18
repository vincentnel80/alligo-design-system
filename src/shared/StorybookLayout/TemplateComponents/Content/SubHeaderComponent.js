import PropTypes from 'prop-types';
import React from 'react';

const SubHeaderComponent = ({ subTitle = '', subContent = '' }) => (
    <div className="sb-sub-small-container">
        <h3 className="title-lg">{subTitle}</h3>
        <div className="sb-desc-content-text">
            {subContent
                .split('\n')
                .filter((line) => line.trim() !== '') // Remove empty lines
                .map((line, index) => (
                    <p key={index} className="body-lg">{line}</p>
                ))}
        </div>
    </div>
);

SubHeaderComponent.propTypes = {
    subContent: PropTypes.string,
    subTitle: PropTypes.string,
};

export default SubHeaderComponent;
