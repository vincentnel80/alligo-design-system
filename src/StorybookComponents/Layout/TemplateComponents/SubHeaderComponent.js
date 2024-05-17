import PropTypes from 'prop-types';
import React from 'react';

const SubHeaderComponent = ({
                                subTitle, subContent,
                            }) => (
    <div className={'sb-desc-content-container'}>
        <div className={'sb-desc-title-wrapper'}>
            <span className={'title-lrg'}>{subTitle}</span>
        </div>
        <div className={'sb-desc-content-text'}>
            {subContent.split('\\n').map((subContentLine, index) => (
                <React.Fragment key={index}>
                    <span className={'body-lrg'}> {subContentLine}</span>
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
