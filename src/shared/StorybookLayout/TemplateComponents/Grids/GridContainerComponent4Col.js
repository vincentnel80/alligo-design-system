import PropTypes from 'prop-types';
import React from 'react';

import CopyToClipboard from '../../../Helpers/CopyToClipboard/CopyToClipboard';

const GridContainerComponent4Col = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => (
    <div className="sb-grid-row-4-col">
        {/* Text Snippet */}
        <div className="sb-grid-item-example">
            {textSnippet.split('\\n').filter(line => line.trim() !== '').map((line, index) => (
                <p key={index} className={fontClassName}>{line}</p>
            ))}
        </div>

        {/* Font Description & Information */}
        <div className="sb-grid-item-desc">
            <span className="title-md">{fontName}</span>
            {fontDescription.split('\\n').filter(line => line.trim() !== '').map((line, index) => (
                <span key={index} className="body-md sb-grid-desc-text">{line}</span>
            ))}
            {fontInformation.split('\\n').filter(line => line.trim() !== '').map((line, index) => (
                <span key={index} className="body-md sb-grid-info-text">{line}</span>
            ))}
        </div>

        {/* Token Copy Feature */}
        <div className="sb-grid-item-token">
            <div className="body-md">
                <CopyToClipboard tokenName={tokenName} />
            </div>
        </div>
    </div>
);

GridContainerComponent4Col.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default GridContainerComponent4Col;
