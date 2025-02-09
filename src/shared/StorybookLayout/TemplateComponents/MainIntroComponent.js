import PropTypes from 'prop-types';
import React from 'react';

const MainIntroComponent = ({
    title, introText, fontClassName,
}) => (
    <>
        <div className={'sb-main-intro-container'}>
            <div className={'sb-main-intro-headline-wrapper'}>
                <div className={'headline-xl'}>{title}</div>
                <div className={'sb-design-status-label draft'}>
                    <div className={'badge-basic variant-warning-light'}><span className={'badge-message'}>Draft</span></div>
                </div>
            </div>
            <div className={'sb-main-intro-description-text'}>
                {introText.split('\\n').map((introTextLine, index) => (
                    <React.Fragment key={index}>
                        <p className={fontClassName}>{introTextLine}</p>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </>
);

MainIntroComponent.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default MainIntroComponent;
