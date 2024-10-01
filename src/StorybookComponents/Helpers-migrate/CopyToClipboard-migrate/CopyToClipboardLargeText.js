import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './copy-to-clipboard.scss';

const CopyToClipboard = ({ tokenName }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboardFunc = () => {
        navigator.clipboard.writeText(tokenName).then(
            () => {
                setCopied(true);
                // changing back to default state after 2 seconds.
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            },
            (err) => {
                console.log('failed to copy', err.mesage);
            },
        );
    };

    return (
        <>
            <div className={'clipboard-container'}>
                <span className={'body-md'}>
                    {tokenName}
                </span>
                <div
                    style={{ float: 'right'}}
                    onClick={copyToClipboardFunc}
                >
                    {copied ? <span>Copied</span> : <span className={'clipboard-icon'}></span>}
                </div>
            </div>
        </>
    );
};

CopyToClipboard.propTypes = {
    tokenName: PropTypes.string.isRequired,
};

export default CopyToClipboard;
