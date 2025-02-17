import PropTypes from 'prop-types';
import React from 'react';

const SubHeaderComponent = ({ subTitle, subContent }) => (
    <div className={'sb-sub-small-container'}>
        <h3 className={'title-lg'}>{subTitle}</h3>
        <div className={'sb-desc-content-text'}>
            {subContent.split('\\n').map((subContentLine, index) => (
                <React.Fragment key={index}>
                    <p className={'body-lg'}> {subContentLine}</p>
                </React.Fragment>
            ))}
        </div>
    </div>
);

SubHeaderComponent.propTypes = {
    subContent: PropTypes.string,
    subTitle: PropTypes.string,
};

export default SubHeaderComponent;
