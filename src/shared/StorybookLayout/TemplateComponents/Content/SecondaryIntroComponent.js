import PropTypes from 'prop-types';
import React from 'react';

const SecondaryIntroComponent = ({ secondaryTitle, secondaryContent }) => (
    <div className="sb-sub-intro-container">
        <div className="sb-sub-title-wrap">
            <div className="headline-lg">{secondaryTitle}</div>
            <hr className="hr-line-division" />
        </div>
        <div className="sb-secondary-content-text">
            {secondaryContent.split('\\n').map((line, index) => (
                <p key={index} className="body-lg">{line}</p>
            ))}
        </div>
    </div>
);

SecondaryIntroComponent.propTypes = {
    secondaryContent: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
};

export default SecondaryIntroComponent;
