import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import './copy-to-clipboard.scss';

const CopyToClipboard = ({ tokenName }) => {
    const [copied, setCopied] = useState(false);
    let timeoutId;

    const copyToClipboardFunc = () => {
        navigator.clipboard.writeText(tokenName).then(
            () => {
                setCopied(true);
                timeoutId = setTimeout(() => {
                    setCopied(false);
                }, 2000);
            },
            (err) => {
                console.error('Failed to copy:', err.message);
            }
        );
    };

    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="clipboard-container">
            <span className="body-md">{tokenName}</span>
            <div
                style={{ float: 'right', cursor: 'pointer' }} // Keeping inline styles
                onClick={copyToClipboardFunc}
                onKeyDown={(e) => e.key === 'Enter' && copyToClipboardFunc()}
                role="button"
                tabIndex="0"
                aria-label="Copy to clipboard"
            >
                {copied ? <span>Copied</span> : <span className="clipboard-icon"></span>}
            </div>
        </div>
    );
};

CopyToClipboard.propTypes = {
    tokenName: PropTypes.string.isRequired,
};

export default CopyToClipboard;
