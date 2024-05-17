import PropTypes from 'prop-types';
import React from 'react';

const SecondaryIntroComponent = ({
    secondaryTitle, secondaryContent,
}) => (
    <>
        <div className={'sb-secondary-intro-container'}>
            <div className={'sb-secondary-title-wrapper'}>
                <div className={'headline-lrg'}>{secondaryTitle}</div>
                <hr className={'hr-line-division'}></hr>
            </div>
            <div className={'sb-secondary-content-wrapper'}>
                {secondaryContent.split('\\n').map((secondaryContentLine, index) => (
                    <React.Fragment key={index}>
                        <p className={'body-lrg'}>{secondaryContentLine}</p>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </>
);

SecondaryIntroComponent.propTypes = {
    secondaryContent: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
};

export default SecondaryIntroComponent;
