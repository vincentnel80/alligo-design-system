import PropTypes from 'prop-types';
import React from 'react';

const MainIntroComponent = ({
    title, introText, fontClassName, status = 'draft',
}) => (
    <div className="sb-intro-container">
        <div className="sb-intro-title-wrap">
            <div className="headline-xl">{title}</div>
            {status && (
                <div className={`sb-status-label ${status}`}>
                    <div className="badge-basic variant-warning-light">
                        <span className="badge-message">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                    </div>
                </div>
            )}
        </div>
        <div className="sb-intro-text">
            {introText.split('\\n').map((line, index) => (
                <p key={index} className={fontClassName}>{line}</p>
            ))}
        </div>
    </div>
);

MainIntroComponent.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string, // Optional, defaults to 'draft'
};

export default MainIntroComponent;
